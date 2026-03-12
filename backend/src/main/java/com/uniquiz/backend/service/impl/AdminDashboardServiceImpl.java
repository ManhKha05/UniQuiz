package com.uniquiz.backend.service.impl;

import com.uniquiz.backend.dto.adminDashboard.*;
import com.uniquiz.backend.repository.ExamRepository;
import com.uniquiz.backend.repository.ResultRepository;
import com.uniquiz.backend.repository.UserRepository;
import com.uniquiz.backend.service.AdminDashboardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Service
public class AdminDashboardServiceImpl implements AdminDashboardService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ExamRepository examRepository;
    @Autowired
    private ResultRepository resultRepository;


    @Override
    public AdminDashboardDTO getDashboardData() {
        AdminDashboardDTO adminDashboardDTO = new AdminDashboardDTO();
        adminDashboardDTO.setTotalUsers(userRepository.countUsers());
        adminDashboardDTO.setTotalExams(examRepository.active());
        adminDashboardDTO.setTotalAttemptsToday(resultRepository.today());
        adminDashboardDTO.setAverageScore(resultRepository.average());

        LocalDateTime fromDate = LocalDate.now().minusDays(6).atStartOfDay();
        List<AttemptsRecentDTO> recentAttempts =
                resultRepository.listAttemptsRecent(fromDate)
                        .stream()
                        .map(o -> new AttemptsRecentDTO(
                                ((java.sql.Date) o[0]).toLocalDate(),
                                (Long) o[1]
                        ))
                        .toList();
        adminDashboardDTO.setAttemptsRecent(recentAttempts);

        List<TopExamDTO> topExams =
                resultRepository.findTopPopularExams()
                        .stream()
                        .map(e -> new TopExamDTO(
                                (String) e[0],
                                (String) e[1],
                                (Long) e[2]
                        ))
                        .toList();
        adminDashboardDTO.setTopExam(topExams);
        return adminDashboardDTO;
    }

    @Override
    public List<TopUserGradeDTO> getTopUserGrades() {
//        List<Object[]> topUserGrades =resultRepository.findUserGrade();
        List<TopUserGradeDTO> topUserGrades =
                resultRepository.findUserGrade()
                        .stream()
                        .map(e -> new TopUserGradeDTO(
                                (String) e[0],
                                (Double) e[1]
                        ))
                        .toList();
        return topUserGrades;
    }

    @Override
    public List<TopUserTryDTO> getTopUserTry() {
//        List<TopUserTryDTO> topUserTry =resultRepository.findUserTry();
        List<TopUserTryDTO> topUserTry =
                resultRepository.findUserTry()
                        .stream()
                        .map(e -> new TopUserTryDTO(
                                (String) e[0],
                                (Long) e[1]
                        ))
                        .toList();
        return topUserTry;
    }
}
