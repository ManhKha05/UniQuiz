package com.uniquiz.backend.service;

import com.uniquiz.backend.dto.user.RegisterRequest;
import com.uniquiz.backend.entity.UserEntity;

public interface UserService {
    UserEntity register(RegisterRequest registerRequest);
}
