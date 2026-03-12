package com.uniquiz.backend.dto.exam;

import com.uniquiz.backend.dto.answer.AnswerDoingDTO;
import com.uniquiz.backend.dto.question.QuestionDoingDTO;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class ExamDoingDTO {
    private String subjectName;
    private String title;
    private Integer duration;
    private Integer resultId;
    private List<QuestionDoingDTO> questions;
}
