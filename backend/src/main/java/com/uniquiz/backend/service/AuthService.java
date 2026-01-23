package com.uniquiz.backend.service;

import com.uniquiz.backend.dto.auth.RegisterRequest;
import com.uniquiz.backend.dto.auth.ResetPasswordRequest;
import com.uniquiz.backend.entity.UserEntity;
import org.apache.coyote.BadRequestException;

public interface AuthService {
    UserEntity register(RegisterRequest registerRequest);
    void processForgotPassword(String email);
    String getUsernameByTokenResetPassword(String token) throws BadRequestException;
    void resetPassword(String token, String password) throws BadRequestException;
}
