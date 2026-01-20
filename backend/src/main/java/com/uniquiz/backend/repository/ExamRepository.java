package com.uniquiz.backend.repository;

import com.uniquiz.backend.entity.ExamEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ExamRepository extends JpaRepository<ExamEntity,Integer> {
    List<ExamEntity> findBySubjectId(Integer subjectId);
}
