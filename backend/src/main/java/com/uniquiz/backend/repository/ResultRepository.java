package com.uniquiz.backend.repository;

import com.uniquiz.backend.dto.adminDashboard.AttemptsRecentDTO;
import com.uniquiz.backend.entity.ResultEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.time.LocalDateTime;
import java.util.List;

public interface ResultRepository extends JpaRepository<ResultEntity, Integer> {
    @Query("SELECT COUNT(r) FROM ResultEntity r WHERE DATE(r.submitTime) = CURRENT_DATE")
    Integer today();

    @Query("SELECT AVG(r.score) FROM ResultEntity r")
    Double average();

    @Query("""
        SELECT DATE(r.submitTime) AS date, COUNT(r) AS quantity
        FROM ResultEntity r
        WHERE r.submitTime >= :fromDate
        GROUP BY DATE(r.submitTime)
        ORDER BY DATE(r.submitTime)
    """)
    List<Object[]> listAttemptsRecent(@Param("fromDate") LocalDateTime fromDate);

    @Query("""
        SELECT
            e.title AS title,
            s.name AS subjec,
            COUNT(r) AS totalAttempts
        FROM ResultEntity r
        JOIN r.exam e
        JOIN e.subject s
        GROUP BY e.id, e.title, s.name
        ORDER BY COUNT(r) DESC
        LIMIT 5
    """)
    List<Object[]> findTopPopularExams();

    @Query("""
        SELECT r FROM ResultEntity r
        JOIN ExamEntity e ON r.exam.id = e.id
        WHERE r.user.id = :userId
            AND (:keyword IS NULL OR e.title LIKE CONCAT('%', :keyword, '%'))
            AND (:subjectId IS NULL OR e.subject.id = :subjectId)    
    """)
    List<ResultEntity> findAllByUserId(Integer userId, String keyword, Integer subjectId);
}
