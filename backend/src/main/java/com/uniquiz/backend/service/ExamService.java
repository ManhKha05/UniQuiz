package com.uniquiz.backend.service;

import com.uniquiz.backend.dto.exam.ExamDTO;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

public interface ExamService {
    List<ExamDTO> getExamsBySubjectId(Integer subjectId);
}
