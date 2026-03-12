package com.uniquiz.backend.controller.admin;

import com.uniquiz.backend.dto.subject.SubjectDTO;
import com.uniquiz.backend.service.SubjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SubjectAdminController {

    @Autowired
    private SubjectService subjectService;

    @PostMapping("/admin/subjects")
    public ResponseEntity<?> addSubject(@RequestBody SubjectDTO subjectDTO) {
        SubjectDTO subject =  subjectService.addSubject(subjectDTO);
        return ResponseEntity.status(HttpStatus.CREATED).body(subject);
    }

    @PutMapping("/admin/subjects")
    public ResponseEntity<?> updateSubject(@RequestBody SubjectDTO subjectDTO) {
        SubjectDTO subject =  subjectService.addSubject(subjectDTO);
        return ResponseEntity.ok().body(subject);
    }

}
