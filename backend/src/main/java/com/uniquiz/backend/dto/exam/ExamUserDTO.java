package com.uniquiz.backend.dto.exam;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ExamUserDTO {
    private Integer id;
    private String title;
    private String subjectName;
    private Integer duration;
    private Integer totalQuestions;
    private String status;
}
