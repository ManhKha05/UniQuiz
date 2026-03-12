package com.uniquiz.backend.dto.result;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
public class ResultHistoryDTO {
    private Integer resultId;
    private String examTitle;
    private String subjectName;
    private Integer duration;
    private Integer totalQuestions;
//    private Integer correctCount;
    private Double score;
    private LocalDateTime submittedAt;
}
