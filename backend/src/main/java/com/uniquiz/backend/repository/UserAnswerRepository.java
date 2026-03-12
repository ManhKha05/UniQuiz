package com.uniquiz.backend.repository;

import com.uniquiz.backend.entity.UserAnswerEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface UserAnswerRepository extends JpaRepository<UserAnswerEntity, Integer> {
    List<UserAnswerEntity> findByResultIdAndQuestionId(Integer resultId, Integer questionId);
}
