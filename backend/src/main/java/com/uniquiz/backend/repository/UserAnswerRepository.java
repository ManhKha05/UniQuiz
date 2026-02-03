package com.uniquiz.backend.repository;

import com.uniquiz.backend.entity.UserAnswerEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserAnswerRepository extends JpaRepository<UserAnswerEntity, Integer> {
    UserAnswerEntity findByResultIdAndQuestionId(Integer resultId, Integer questionId);
}
