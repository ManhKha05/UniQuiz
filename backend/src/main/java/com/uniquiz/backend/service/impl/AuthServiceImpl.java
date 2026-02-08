package com.uniquiz.backend.service.impl;

import com.uniquiz.backend.converter.UserConverter;
import com.uniquiz.backend.dto.auth.RegisterRequest;
import com.uniquiz.backend.dto.auth.ResetPasswordRequest;
import com.uniquiz.backend.entity.ResetPasswordTokenEntity;
import com.uniquiz.backend.entity.UserEntity;
import com.uniquiz.backend.exceptions.UserAlreadyExistsException;
import com.uniquiz.backend.repository.ResetPasswordTokenRepository;
import com.uniquiz.backend.repository.UserRepository;
import com.uniquiz.backend.service.AuthService;
import com.uniquiz.backend.service.EmailService;
import org.apache.coyote.BadRequestException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.util.DigestUtils;

import javax.naming.ConfigurationException;
import java.time.LocalDateTime;
import java.util.UUID;

@Service
public class AuthServiceImpl implements AuthService {

    private final UserConverter userConverter;

    private final UserRepository userRepository;

    private final ResetPasswordTokenRepository tokenRepository;

    private final PasswordEncoder passwordEncoder ;

    private final EmailService emailService;

    public AuthServiceImpl(UserConverter userConverter, UserRepository userRepository, ResetPasswordTokenRepository tokenRepository, PasswordEncoder passwordEncoder, EmailService emailService) {
        this.userConverter = userConverter;
        this.userRepository = userRepository;
        this.tokenRepository = tokenRepository;
        this.passwordEncoder = passwordEncoder;
        this.emailService = emailService;
    }

    @Override
    public UserEntity register(RegisterRequest registerRequest) {
        if (userRepository.findByUsername(registerRequest.getUsername()) != null) {
            throw new UserAlreadyExistsException("Username đã tồn tại");
        }
        if (userRepository.findByEmail(registerRequest.getEmail()) != null) {
            throw new UserAlreadyExistsException("Email đã được sử dụng");
        }

        UserEntity userEntity = userConverter.convert(registerRequest);
        userEntity.setPassword(passwordEncoder.encode(registerRequest.getPassword()));
        return userRepository.save(userEntity);
    }

    @Override
    public void processForgotPassword(String email) {
        UserEntity userEntity = userRepository.findByEmail(email);

        if(userEntity == null){
            return;
        }

        String token = UUID.randomUUID().toString();
        String tokenHash = DigestUtils.md5DigestAsHex(token.getBytes());

        ResetPasswordTokenEntity resetPasswordToken = new ResetPasswordTokenEntity();
        resetPasswordToken.setTokenHash(tokenHash);
        resetPasswordToken.setUser(userEntity);
        resetPasswordToken.setExpiresAt(LocalDateTime.now().plusMinutes(15));

        tokenRepository.save(resetPasswordToken);

        String resetLink = "http://localhost:3000/auth/reset-password/" + tokenHash;

        emailService.sendResetPasswordEmail(email, resetLink);
    }

    @Override
    public String getUsernameByTokenResetPassword(String token) throws BadRequestException {
        ResetPasswordTokenEntity resetPasswordTokenEntity = tokenRepository.findByTokenHash(token)
                .orElseThrow(() -> new BadRequestException("Token không hợp lệ"));
        LocalDateTime expiresAt = resetPasswordTokenEntity.getExpiresAt();
        if(LocalDateTime.now().isAfter(expiresAt)){
            throw new BadRequestException("Token hết hạn !!!");
        }
        return resetPasswordTokenEntity.getUser().getUsername();
    }

    @Override
    public void resetPassword(String token, String password) throws BadRequestException {
        ResetPasswordTokenEntity tokenEntity = tokenRepository.findByTokenHash(token)
                .orElseThrow(() -> new BadRequestException("Token không hợp lệ"));
        if(tokenEntity.getExpiresAt().isBefore(LocalDateTime.now())){
            throw new BadRequestException("Token đã hết hạn");
        }
        UserEntity userEntity = tokenEntity.getUser();
        userEntity.setPassword(passwordEncoder.encode(password));
        userRepository.save(userEntity);

        tokenEntity.setUsedAt(LocalDateTime.now());
        tokenRepository.save(tokenEntity);
    }
}
