package com.uniquiz.backend.dto.result;

import com.uniquiz.backend.dto.question.QuestionResultDTO;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.List;

@Getter
@Setter
public class ResultDetailDTO {
    private Integer examId;
    private String title;
    private double grade;
    private Integer totalQuestions;
    private Integer totalCorrect;
    private Integer totalWrong;
    private Long duration;
    private LocalDateTime submittedDate;
    private List<QuestionResultDTO> questions;
}
