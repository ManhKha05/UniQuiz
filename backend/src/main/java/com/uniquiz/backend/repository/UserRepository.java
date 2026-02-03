package com.uniquiz.backend.repository;

import com.uniquiz.backend.entity.UserEntity;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;


public interface UserRepository extends JpaRepository<UserEntity, Integer> {
    UserEntity findByUsername(String username);
    UserEntity findByEmail(String email);

    @Query("""
       SELECT u FROM UserEntity u
       WHERE u.role = 'USER'
         AND (:keyword IS NULL OR u.fullName LIKE CONCAT('%', :keyword, '%'))
    """)
    Page<UserEntity> getUserList(Integer page, Integer pageSize, String keyword, Pageable pageable);

    @Query("SELECT COUNT(u) FROM UserEntity u WHERE u.role = 'USER' ")
    Integer countUsers();
}
