package com.uniquiz.backend.repository;

import com.uniquiz.backend.entity.QuestionEntity;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface QuestionRepository extends JpaRepository<QuestionEntity, Integer> {

    @Query("""
        SELECT q FROM QuestionEntity q 
        WHERE (:keyword IS NULL OR q.content LIKE CONCAT('%', :keyword, '%'))
            AND (:subjectId IS NULL OR q.subject.id = :subjectId)
            AND (:level IS NULL OR q.level = :level)
            AND q.isDeleted = 0
        ORDER BY q.id DESC
    """)
    Page<QuestionEntity> search(String keyword, Integer subjectId, String level, Pageable pageable);
}
