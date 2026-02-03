package com.uniquiz.backend.controller.admin;

import com.uniquiz.backend.dto.adminDashboard.AdminDashboardDTO;
import com.uniquiz.backend.service.AdminDashboardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

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
}
