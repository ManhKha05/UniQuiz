package com.uniquiz.backend.dto.exam;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class AdminExamResultDTO {
    private Integer id;
    private String fullName;
    private String username;
    private String title;
    private String subjectName;
    private double score;
    private Long duration;
    private LocalDateTime submitTime;
}
