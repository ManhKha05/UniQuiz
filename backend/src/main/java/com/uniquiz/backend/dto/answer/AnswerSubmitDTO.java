package com.uniquiz.backend.dto.answer;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class AnswerSubmitDTO {
    private Integer questionId;
    private List<Integer> answerIds;
}
