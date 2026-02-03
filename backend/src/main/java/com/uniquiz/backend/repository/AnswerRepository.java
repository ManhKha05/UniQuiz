package com.uniquiz.backend.repository;

import com.uniquiz.backend.entity.AnswerEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AnswerRepository extends JpaRepository<AnswerEntity, Integer> {

}
