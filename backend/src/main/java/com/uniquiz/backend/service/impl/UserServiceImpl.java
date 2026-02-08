package com.uniquiz.backend.service.impl;

import com.uniquiz.backend.converter.UserConverter;
import com.uniquiz.backend.dto.user.UserDTO;
import com.uniquiz.backend.entity.UserEntity;
import com.uniquiz.backend.exceptions.BadRequestException;
import com.uniquiz.backend.repository.UserRepository;
import com.uniquiz.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private UserConverter userConverter;

    @Override
    public Page<UserDTO> getUsers(Integer page, Integer pageSize, String keyword) {
        Pageable pageable = PageRequest.of(page, pageSize);

        Page<UserEntity> userEntities = userRepository.getUserList(page, pageSize, keyword, pageable);
        Page<UserDTO> userDTOs = userEntities.map(u -> userConverter.toDTO(u));
        return userDTOs;
    }

    @Override
    public UserDTO updateStatus(Integer id) {
        UserEntity user = userRepository.findById(id)
                .orElseThrow(() -> new BadRequestException("User id " + id + " not found."));
        if (user.getStatus().equals("ACTIVE")) {
            user.setStatus("BLOCKED");
        } else {
            user.setStatus("ACTIVE");
        }
        userRepository.save(user);
        return userConverter.toDTO(user);
    }

}
