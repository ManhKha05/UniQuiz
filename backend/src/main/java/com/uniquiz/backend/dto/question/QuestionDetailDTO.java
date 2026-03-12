package com.uniquiz.backend.dto.question;


import com.uniquiz.backend.dto.answer.AnswerDTO;
import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
public class QuestionDetailDTO {
    private Integer id;
    private String content;
    private Integer subjectId;
    private String subjectName;
    private String level;
    private String type;
    private List<Integer> correctAnswer =  new ArrayList<>();
    List<AnswerDTO> answers;
}
