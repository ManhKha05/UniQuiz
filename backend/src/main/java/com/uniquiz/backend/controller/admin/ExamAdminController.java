package com.uniquiz.backend.controller.admin;

import com.uniquiz.backend.dto.exam.DashboardExamDTO;
import com.uniquiz.backend.dto.exam.ExamAdminDTO;
import com.uniquiz.backend.dto.exam.ExamCreateRequest;
import com.uniquiz.backend.service.ExamService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
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
            @RequestParam(required = false) Integer size,
            @RequestParam(required = false) String keyword,
            @RequestParam(required = false) Integer subjectId,
            @RequestParam(required = false) String status,
            @RequestParam(required = false) String sort
    ) {
        Page<ExamAdminDTO> examAdminDTOS = examService.getExamsAdmin(page, size, keyword, subjectId, status, sort);
        return ResponseEntity.ok(examAdminDTOS);
    }

    @PostMapping("")
    public ResponseEntity<?> addExamAdmin(@RequestBody ExamCreateRequest  rq) {
        examService.createExam(rq);
        return ResponseEntity.ok().build();
    }

    @PutMapping("")
    public ResponseEntity<?> updateExamAdmin(@RequestBody ExamCreateRequest  rq) {
        examService.updateExam(rq);
        return ResponseEntity.ok().build();
    }
}
