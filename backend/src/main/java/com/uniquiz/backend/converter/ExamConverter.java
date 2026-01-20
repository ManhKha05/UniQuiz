package com.uniquiz.backend.converter;

import com.uniquiz.backend.dto.exam.ExamDTO;
import com.uniquiz.backend.entity.ExamEntity;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class ExamConverter {

    @Autowired
    private ModelMapper modelMapper;

    public ExamDTO toDTO(ExamEntity examEntity) {
        return modelMapper.map(examEntity, ExamDTO.class);
    }
}
