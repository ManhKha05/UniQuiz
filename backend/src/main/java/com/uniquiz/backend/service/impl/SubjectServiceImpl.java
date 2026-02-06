package com.uniquiz.backend.service.impl;

import com.uniquiz.backend.converter.SubjectConverter;
import com.uniquiz.backend.dto.subject.SubjectDTO;
import com.uniquiz.backend.entity.SubjectEntity;
import com.uniquiz.backend.repository.SubjectRepository;
import com.uniquiz.backend.service.SubjectService;
import lombok.SneakyThrows;
import org.apache.coyote.BadRequestException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
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
    public Page<SubjectDTO> getSubjects(Integer page, Integer size, String keyword, String status) {
        if (page == null) {
            page = 0;
            size = Integer.MAX_VALUE;
        }
        Pageable pageable = PageRequest.of(page, size);
        Page<SubjectEntity> subjectEntities = subjectRepository.find(keyword, status, pageable);
        return subjectEntities.map(subjectConverter::toDTO);
    }

    @Override
    public SubjectDTO addSubject(SubjectDTO subjectDTO) {
        SubjectEntity subjectEntity = subjectConverter.toEntity(subjectDTO);
        subjectRepository.save(subjectEntity);
        return subjectConverter.toDTO(subjectEntity);
    }


    @SneakyThrows
    @Override
    public SubjectDTO getSubjectById(Integer id) {
        SubjectEntity subjectEntity = subjectRepository.findById(id)
                .orElseThrow(() -> new BadRequestException("Subject Not Found"));
        return  subjectConverter.toDTO(subjectEntity);
    }
}
