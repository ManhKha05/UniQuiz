package com.uniquiz.backend.controller;

import com.uniquiz.backend.dto.exam.ExamDTO;
import com.uniquiz.backend.service.ExamService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class ExamController {

    @Autowired
    private ExamService examService;

    @GetMapping("subjects/{subjectId}/exams")
    public List<ExamDTO> getExamsBySubject(@PathVariable("subjectId") int subjectId) {
        return examService.getExamsBySubjectId(subjectId);
    }
}
