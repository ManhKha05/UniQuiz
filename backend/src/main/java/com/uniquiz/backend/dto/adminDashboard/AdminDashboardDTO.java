package com.uniquiz.backend.dto.adminDashboard;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class AdminDashboardDTO {
    private Integer totalUsers;
    private Integer totalExams;
    private Integer totalAttemptsToday;
    private Double averageScore;
    private List<AttemptsRecentDTO> attemptsRecent;
    private List<TopExamDTO> topExam;
}
