package com.uniquiz.backend.converter;

import com.uniquiz.backend.dto.exam.ExamAdminDTO;
import com.uniquiz.backend.dto.exam.ExamCreateRequest;
import com.uniquiz.backend.dto.exam.ExamUserDTO;
import com.uniquiz.backend.entity.ExamEntity;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class ExamConverter {

    @Autowired
    private ModelMapper modelMapper;

    public ExamUserDTO toExamUserDTO(ExamEntity examEntity) {
        return modelMapper.map(examEntity, ExamUserDTO.class);
    }
    public ExamAdminDTO toExamAdminDTO(ExamEntity examEntity) {
        return modelMapper.map(examEntity, ExamAdminDTO.class);
    }

    public ExamEntity requestToExamEntity(ExamCreateRequest examCreateRequest) {
        return modelMapper.map(examCreateRequest, ExamEntity.class);
    }

}
