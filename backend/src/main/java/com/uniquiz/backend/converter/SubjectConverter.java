package com.uniquiz.backend.converter;

import com.uniquiz.backend.dto.subject.SubjectDTO;
import com.uniquiz.backend.entity.SubjectEntity;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class SubjectConverter {

    @Autowired
    private ModelMapper modelMapper;

    public SubjectDTO toDTO(SubjectEntity subjectEntity) {
        SubjectDTO subjectDto = modelMapper.map(subjectEntity, SubjectDTO.class);
        return subjectDto;
    }
}
