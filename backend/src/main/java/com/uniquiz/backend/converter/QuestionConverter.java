package com.uniquiz.backend.converter;

import com.uniquiz.backend.dto.question.QuestionDTO;
import com.uniquiz.backend.dto.question.QuestionDetailDTO;
import com.uniquiz.backend.entity.QuestionEntity;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class QuestionConverter {

    @Autowired
    private ModelMapper modelMapper;

    public QuestionDTO toDTO(QuestionEntity questionEntity) {
        return modelMapper.map(questionEntity, QuestionDTO.class);
    }

    public QuestionDetailDTO toDetailDTO(QuestionEntity questionEntity) {
        return modelMapper.map(questionEntity, QuestionDetailDTO.class);
    }
}
