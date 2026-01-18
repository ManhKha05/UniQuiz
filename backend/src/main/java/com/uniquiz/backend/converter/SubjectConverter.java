package com.uniquiz.backend.converter;

import com.uniquiz.backend.dto.subject.SubjectResponse;
import com.uniquiz.backend.entity.SubjectEntity;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class SubjectConverter {

    @Autowired
    private ModelMapper modelMapper;

    public SubjectResponse convert(SubjectEntity subjectEntity) {
        SubjectResponse subjectResponse = modelMapper.map(subjectEntity, SubjectResponse.class);
        return subjectResponse;
    }
}
