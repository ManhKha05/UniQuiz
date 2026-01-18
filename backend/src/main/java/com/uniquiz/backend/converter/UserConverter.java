package com.uniquiz.backend.converter;

import com.uniquiz.backend.dto.user.RegisterRequest;
import com.uniquiz.backend.entity.UserEntity;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class UserConverter {

    @Autowired
    private ModelMapper modelMapper;

    public UserEntity convert(RegisterRequest registerRequest) {
        return modelMapper.map(registerRequest, UserEntity.class);
    }
}
