package com.uniquiz.backend.dto.question;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
public class QuestionDTO {
    private String id;
    private String content;
    private String subjectName;
    private String level;
    private LocalDateTime createdAt;
}
