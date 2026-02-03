package com.uniquiz.backend.repository;

import com.uniquiz.backend.entity.ExamEntity;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ExamRepository extends JpaRepository<ExamEntity,Integer> {
    @Query("SELECT COUNT(*) FROM ExamEntity  ")
    Integer total();

    @Query("SELECT COUNT(*) FROM ExamEntity WHERE status = 'ACTIVE' ")
    Integer active();

    @Query("SELECT COUNT(*) FROM ExamEntity WHERE status = 'INACTIVE' ")
    Integer inactive();

    @Query("SELECT COUNT(*) FROM ExamEntity WHERE status = 'DRAFT' ")
    Integer draft();

    @Query("""
        SELECT e FROM ExamEntity e 
        WHERE (:keyword IS NULL OR title LIKE CONCAT('%', :keyword, '%'))
            AND (:subjectId IS NULL OR subject.id = :subjectId)
            AND (:status IS NULL OR status = :status)   
    """)
    Page<ExamEntity> findExamsAdminList(String keyword, Integer subjectId, String status, Pageable pageable);

    List<ExamEntity> findBySubjectIdAndStatus(Integer subjectId, String status);


}
