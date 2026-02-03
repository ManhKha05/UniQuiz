package com.uniquiz.backend.dto.answer;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class AnswerSubmitDTO {
    private Integer questionId;
    private Integer answerId;
}
