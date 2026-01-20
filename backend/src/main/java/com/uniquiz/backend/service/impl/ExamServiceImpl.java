package com.uniquiz.backend.service.impl;

import com.uniquiz.backend.converter.ExamConverter;
import com.uniquiz.backend.dto.exam.ExamDTO;
import com.uniquiz.backend.entity.ExamEntity;
import com.uniquiz.backend.repository.ExamRepository;
import com.uniquiz.backend.service.ExamService;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ExamServiceImpl implements ExamService {

    private final ExamRepository examRepository;

    private final ExamConverter examConverter;

    public ExamServiceImpl(ExamRepository examRepository, ExamConverter examConverter) {
        this.examRepository = examRepository;
        this.examConverter = examConverter;
    }

    @Override
    public List<ExamDTO> getExamsBySubjectId(Integer subjectId) {
        List<ExamEntity> examEntities = examRepository.findBySubjectId(subjectId);
        List<ExamDTO> examDTOs = new ArrayList<>();
        for (ExamEntity examEntity : examEntities) {
            examDTOs.add(examConverter.toDTO(examEntity));
        }
        return examDTOs;
    }
}
