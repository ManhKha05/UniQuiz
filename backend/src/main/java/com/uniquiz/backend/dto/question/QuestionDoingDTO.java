package com.uniquiz.backend.dto.question;

import com.uniquiz.backend.dto.answer.AnswerDoingDTO;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class QuestionDoingDTO {
    private Integer id;
    private String type;
    private String content;
    private List<AnswerDoingDTO> answers;
}
