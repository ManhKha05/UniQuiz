package com.uniquiz.backend.controller.user;

import com.uniquiz.backend.dto.subject.SubjectDTO;
import com.uniquiz.backend.service.SubjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.*;

@RestController
public class SubjectController {

    @Autowired
    private SubjectService subjectService;

    @GetMapping("/subjects")
    public Page<SubjectDTO> getSubjects(
            @RequestParam(required = false) Integer page,
            @RequestParam(required = false) Integer size,
            @RequestParam(required = false) String keyword,
            @RequestParam(required = false) String status
    ) {
        return subjectService.getSubjects(page, size, keyword, status);
    }

    @GetMapping("/subjects/{id}")
    public SubjectDTO getSubject(@PathVariable("id") int id) {
        return subjectService.getSubjectById(id);
    }
}
