package com.uniquiz.backend.controller.user;

import com.uniquiz.backend.dto.exam.ExamCreateRequest;
import com.uniquiz.backend.dto.exam.ExamDoingDTO;
import com.uniquiz.backend.dto.exam.ExamUserDTO;
import com.uniquiz.backend.dto.exam.SubmitExamRequest;
import com.uniquiz.backend.service.ExamService;
import com.uniquiz.backend.service.ResultService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class ExamController {

    @Autowired
    private ExamService examService;

    @Autowired
    private ResultService resultService;

    @GetMapping("subjects/{subjectId}/exams")
    public List<ExamUserDTO> getExamsBySubject(@PathVariable("subjectId") int subjectId) {
        return examService.getExamsBySubjectId(subjectId);
    }

    @GetMapping("exams/{id}")
    public ResponseEntity<?> getExamById(@PathVariable("id") int id) {
        ExamUserDTO examUserDTO = examService.getExamById(id);
        return ResponseEntity.ok(examUserDTO);
    }

    @GetMapping("/exams/request")
    public ResponseEntity<?> examRequest() {
        return ResponseEntity.ok(Map.of("message", "Success"));
    }

    @GetMapping("/exams/{id}/start")
    public ResponseEntity<?> examStart(@PathVariable("id") int id) {
        ExamDoingDTO exam = resultService.startExam(id);
        return ResponseEntity.ok(exam);
    }

    @PostMapping("/exams/submit")
    public ResponseEntity<?> submitExam(@RequestBody SubmitExamRequest rq) {
        resultService.submitExam(rq);
        return ResponseEntity.ok().body(Map.of("message", "Submit Successfull"));
    }
}
