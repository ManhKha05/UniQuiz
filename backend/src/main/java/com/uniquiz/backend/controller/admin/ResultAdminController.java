package com.uniquiz.backend.controller.admin;

import com.uniquiz.backend.dto.exam.AdminExamResultDTO;
import com.uniquiz.backend.service.ResultService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ResultAdminController {

    @Autowired
    private ResultService resultService;

    @GetMapping("/admin/results")
    public ResponseEntity<?> getResultListAdmin(
            @RequestParam(required = false) Integer page,
            @RequestParam(required = false) Integer pageSize,
            @RequestParam(required = false) String keyword,
            @RequestParam(required = false) Integer subjectId,
            @RequestParam(required = false) Integer examId,
            @RequestParam(required = false) String sort
    ) {
        Page<AdminExamResultDTO> resultList = resultService.getResultListAdmin(page,  pageSize, keyword, subjectId, examId, sort);
        return ResponseEntity.ok().body(resultList);
    }
}
