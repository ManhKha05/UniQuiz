package com.uniquiz.backend.repository;

import com.uniquiz.backend.entity.SubjectEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface SubjectRepository extends JpaRepository<SubjectEntity, Integer> {
    List<SubjectEntity> findAllByStatus(String status);
}
