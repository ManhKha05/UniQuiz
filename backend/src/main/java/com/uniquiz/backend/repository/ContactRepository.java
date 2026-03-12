package com.uniquiz.backend.repository;

import com.uniquiz.backend.entity.ContactEntity;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ContactRepository extends JpaRepository<ContactEntity, Integer> {
    @Query("SELECT COUNT(*) FROM ContactEntity ")
    Integer countTotal();

    @Query("SELECT COUNT(*) FROM ContactEntity c WHERE c.status = 'PENDING'")
    Integer countPending();

    @Query("SELECT COUNT(*) FROM ContactEntity c WHERE c.status = 'RESOLVED'")
    Integer countResolved();

    @Query("SELECT COUNT(*) FROM ContactEntity c WHERE DATE(c.createdAt) = CURRENT_DATE")
    Integer countToday();

    @Query(""" 
            SELECT c FROM ContactEntity c 
            WHERE (:keyword IS NULL OR c.name LIKE CONCAT('%', :keyword, '%') OR c.email LIKE CONCAT('%', :keyword, '%') OR c.title LIKE CONCAT('%', :keyword, '%')) 
                AND (:status IS NULL OR c.status = :status)
    """)
    Page<ContactEntity> search(String keyword, String status, Pageable pageable);
}
