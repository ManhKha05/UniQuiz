package com.uniquiz.backend.service;


import com.uniquiz.backend.dto.adminDashboard.AdminDashboardDTO;
import com.uniquiz.backend.dto.adminDashboard.TopUserGradeDTO;
import com.uniquiz.backend.dto.adminDashboard.TopUserTryDTO;

import java.util.List;

public interface AdminDashboardService {
    AdminDashboardDTO getDashboardData();
    List<TopUserGradeDTO> getTopUserGrades();
    List<TopUserTryDTO> getTopUserTry();
}
