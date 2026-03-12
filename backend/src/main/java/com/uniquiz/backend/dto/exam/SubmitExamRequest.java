package com.uniquiz.backend.dto.exam;

import com.uniquiz.backend.dto.answer.AnswerSubmitDTO;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class SubmitExamRequest {
    private Integer resultId;
    private List<AnswerSubmitDTO> answers;
}
