package com.uniquiz.backend.controller;

import com.uniquiz.backend.dto.subject.SubjectResponse;
import com.uniquiz.backend.service.SubjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class SubjectController {

    @Autowired
    private SubjectService subjectService;

    @GetMapping("/subjects")
    public List<SubjectResponse> getSubjects() {
        return subjectService.getSubjects();
    }
}
