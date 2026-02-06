package com.uniquiz.backend.controller.admin;

import com.uniquiz.backend.dto.exam.DashboardExamDTO;
import com.uniquiz.backend.dto.exam.ExamAdminDTO;
import com.uniquiz.backend.dto.exam.ExamCreateRequest;
import com.uniquiz.backend.service.ExamService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
//@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/admin/exams")
public class ExamAdminController {

    @Autowired
    private ExamService examService;

    @GetMapping("/dashboard")
    public ResponseEntity<?> getDashboard() {
        DashboardExamDTO dashboardExamDTO = examService.getDashboard();
        return ResponseEntity.ok(dashboardExamDTO);
    }

    @GetMapping("")
    public ResponseEntity<?> getExamsAdmin(
            @RequestParam(required = false) Integer page,
            @RequestParam(required = false) Integer pageSize,
            @RequestParam(required = false) String keyword,
            @RequestParam(required = false) Integer subjectId,
            @RequestParam(required = false) String status,
            @RequestParam(required = false) String sort
    ) {
        Page<ExamAdminDTO> examAdminDTOS = examService.getExamsAdmin(page, pageSize, keyword, subjectId, status, sort);
        return ResponseEntity.ok(examAdminDTOS);
    }

    @PostMapping("")
    public ResponseEntity<?> addExamAdmin(@RequestBody ExamCreateRequest  rq) {
        examService.createExam(rq);
        return ResponseEntity.status(HttpStatus.CREATED).body(Map.of("message", "Create Exam Successful"));
    }

    @PutMapping("")
    public ResponseEntity<?> updateExamAdmin(@RequestBody ExamCreateRequest  rq) {
        examService.updateExam(rq);
        return ResponseEntity.ok().body(Map.of("message", "Update Exam Successful"));
    }
}
