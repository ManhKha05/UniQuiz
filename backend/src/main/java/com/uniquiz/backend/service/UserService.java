package com.uniquiz.backend.service;

import com.uniquiz.backend.dto.auth.RegisterRequest;
import com.uniquiz.backend.dto.user.UserDTO;
import com.uniquiz.backend.entity.UserEntity;
import org.apache.coyote.BadRequestException;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

public interface UserService {
    Page<UserDTO> getUsers(Integer page, Integer pageSize, String keyword);
    UserDTO updateStatus(Integer id) throws BadRequestException;
}
