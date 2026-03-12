package com.uniquiz.backend.dto.exam;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

@Getter
@Setter
public class ExamAdminDTO {
    private Integer id;
    private String title;
    private Integer subjectId;
    private String subjectName;
    private Integer duration;
    private String status;
    private Integer totalQuestions;
    private Integer totalAttempts;
    private Double averageScore;
    private List<Integer> questionIds;
    private LocalDateTime createdAt;
}
