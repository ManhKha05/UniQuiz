package com.uniquiz.backend.service;

import com.uniquiz.backend.dto.subject.SubjectResponse;

import java.util.List;

public interface SubjectService {
    List<SubjectResponse> getSubjects();
}
