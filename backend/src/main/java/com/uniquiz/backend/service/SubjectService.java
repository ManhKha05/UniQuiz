package com.uniquiz.backend.service;

import com.uniquiz.backend.dto.subject.SubjectDTO;

import java.util.List;

public interface SubjectService {
    List<SubjectDTO> getSubjects();
    SubjectDTO getSubjectById(Integer id);
}
