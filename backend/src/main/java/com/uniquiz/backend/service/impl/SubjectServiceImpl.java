package com.uniquiz.backend.service.impl;

import com.uniquiz.backend.converter.SubjectConverter;
import com.uniquiz.backend.dto.subject.SubjectDTO;
import com.uniquiz.backend.entity.SubjectEntity;
import com.uniquiz.backend.repository.SubjectRepository;
import com.uniquiz.backend.service.SubjectService;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class SubjectServiceImpl implements SubjectService {

    private final SubjectRepository subjectRepository;

    private final SubjectConverter subjectConverter;

    public SubjectServiceImpl(SubjectRepository subjectRepository, SubjectConverter subjectConverter) {
        this.subjectRepository = subjectRepository;
        this.subjectConverter = subjectConverter;
    }

    @Override
    public List<SubjectDTO> getSubjects() {
        List<SubjectEntity> subjectEntities = subjectRepository.findAllByStatus("ACTIVE");
        List<SubjectDTO> subjectDTOS = new ArrayList<>();
        for (SubjectEntity subjectEntity : subjectEntities) {
            subjectDTOS.add(subjectConverter.toDTO(subjectEntity));
        }
        return subjectDTOS;
    }

    @Override
    public SubjectDTO getSubjectById(Integer id) {
        SubjectEntity subjectEntity = subjectRepository.findById(id).orElseThrow();
        return  subjectConverter.toDTO(subjectEntity);
    }
}
