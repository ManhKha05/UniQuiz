package com.uniquiz.backend.repository;

import com.uniquiz.backend.entity.SubjectEntity;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface SubjectRepository extends JpaRepository<SubjectEntity, Integer> {
    @Query("""
        SELECT s FROM SubjectEntity s 
        WHERE (:status IS NULL OR status = :status) AND (:keyword IS NULL OR s.name LIKE CONCAT('%', :keyword, '%'))
    """)
    Page<SubjectEntity> find(String keyword, String status, Pageable pageable);


}
