package com.uniquiz.backend.dto.question;

import com.uniquiz.backend.dto.answer.AnswerResultDTO;
import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
public class QuestionResultDTO {
    private Integer id;
    private String content;
    private String status = null;
    private List<AnswerResultDTO> answers = new ArrayList<>();
    private List<Integer> selectedAnswerId;
    private List<Integer> correctAnswerId;
}
