package com.uniquiz.backend.controller.admin;

import com.uniquiz.backend.dto.subject.SubjectDTO;
import com.uniquiz.backend.service.SubjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SubjectAdminController {

    @Autowired
    private SubjectService subjectService;

    @PostMapping("/admin/subjects")
    public ResponseEntity<?> addSubject(@RequestBody SubjectDTO subjectDTO) {
        SubjectDTO subject =  subjectService.addSubject(subjectDTO);
        return ResponseEntity.ok(subject);
    }

}
