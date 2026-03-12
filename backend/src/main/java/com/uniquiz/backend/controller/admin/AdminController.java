package com.uniquiz.backend.controller.admin;

import com.uniquiz.backend.dto.adminDashboard.AdminDashboardDTO;
import com.uniquiz.backend.dto.adminDashboard.TopUserGradeDTO;
import com.uniquiz.backend.dto.adminDashboard.TopUserTryDTO;
import com.uniquiz.backend.service.AdminDashboardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class AdminController {

    @Autowired
    private AdminDashboardService adminDashboardService;

    @GetMapping("/admin/dashboard")
    public ResponseEntity<?> getDashboard() {
        AdminDashboardDTO adminDashboardDTO = adminDashboardService.getDashboardData();
        return ResponseEntity.ok(adminDashboardDTO);
    }

    @GetMapping("/admin/top-user-grade")
    public ResponseEntity<?> getTopUserGrade() {
        List<TopUserGradeDTO> result = adminDashboardService.getTopUserGrades();
        return ResponseEntity.ok(result);
    }

    @GetMapping("/admin/top-user-try")
    public ResponseEntity<?> getTopUserTry() {
        List<TopUserTryDTO> result = adminDashboardService.getTopUserTry();
        return ResponseEntity.ok(result);
    }
}
