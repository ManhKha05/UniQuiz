package com.uniquiz.backend.dto.answer;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class AnswerDTO {
    private Integer id;
    private String content;
    private Integer isCorrect;
}
