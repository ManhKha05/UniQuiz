package com.uniquiz.backend.service.impl;

import com.uniquiz.backend.converter.UserConverter;
import com.uniquiz.backend.dto.user.RegisterRequest;
import com.uniquiz.backend.entity.UserEntity;
import com.uniquiz.backend.repository.UserRepository;
import com.uniquiz.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserConverter userConverter;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder ;

    @Override
    public UserEntity register(RegisterRequest registerRequest) {
        UserEntity userEntity = userConverter.convert(registerRequest);
        userEntity.setPassword(passwordEncoder.encode(registerRequest.getPassword()));
        return userRepository.save(userEntity);
    }
}
