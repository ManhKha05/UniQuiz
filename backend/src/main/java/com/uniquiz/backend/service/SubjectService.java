package com.uniquiz.backend.service;

import com.uniquiz.backend.dto.subject.SubjectDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface SubjectService {
    Page<SubjectDTO> getSubjects(Integer page, Integer size, String keyword, String status);
    SubjectDTO getSubjectById(Integer id);
    SubjectDTO addSubject(SubjectDTO subjectDTO);
}
