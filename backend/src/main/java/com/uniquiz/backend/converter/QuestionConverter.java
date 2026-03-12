package com.uniquiz.backend.converter;

import com.uniquiz.backend.dto.question.QuestionDetailDTO;
import com.uniquiz.backend.entity.AnswerEntity;
import com.uniquiz.backend.entity.QuestionEntity;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class QuestionConverter {

    @Autowired
    private ModelMapper modelMapper;

    public QuestionDetailDTO toDetailDTO(QuestionEntity questionEntity) {
        QuestionDetailDTO questionDetailDTO = modelMapper.map(questionEntity, QuestionDetailDTO.class);
        for (int i = 0; i < questionEntity.getAnswers().size(); i++) {
            AnswerEntity answerEntity = questionEntity.getAnswers().get(i);
            if(answerEntity.getIsCorrect() == 1) questionDetailDTO.getCorrectAnswer().add(i);
        }
        return questionDetailDTO;
    }
}
