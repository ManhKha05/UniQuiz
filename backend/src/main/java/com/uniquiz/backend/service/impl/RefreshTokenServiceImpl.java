package com.uniquiz.backend.service.impl;

import com.uniquiz.backend.entity.RefreshTokenEntity;
import com.uniquiz.backend.entity.UserEntity;
import com.uniquiz.backend.repository.RefreshTokenRepository;
import com.uniquiz.backend.service.RefreshTokenService;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
public class RefreshTokenServiceImpl implements RefreshTokenService {

    private final RefreshTokenRepository refreshTokenRepository;

    public RefreshTokenServiceImpl(RefreshTokenRepository refreshTokenRepository) {
        this.refreshTokenRepository = refreshTokenRepository;
    }

    @Override
    public void saveRefreshToken(String token, UserEntity user) {
        RefreshTokenEntity refreshTokenEntity = new RefreshTokenEntity();
        refreshTokenEntity.setToken(token);
        refreshTokenEntity.setUser(user);
        refreshTokenEntity.setExpiresAt(LocalDateTime.now().plusDays(7));
        refreshTokenRepository.save(refreshTokenEntity);
    }

    @Override
    public void revoke(String token) {
        RefreshTokenEntity refreshTokenEntity = refreshTokenRepository.findByToken(token);
        refreshTokenEntity.setRevoked(true);
        refreshTokenRepository.save(refreshTokenEntity);
    }

    @Override
    public RefreshTokenEntity validate(String token) {
        RefreshTokenEntity refreshTokenEntity = refreshTokenRepository.findByToken(token);
        if (refreshTokenEntity == null) {
            throw new RuntimeException("Refresh token not found");
        }
        if (refreshTokenEntity.isRevoked()) {
            throw new RuntimeException("Refresh token is already revoked");
        }
        if (refreshTokenEntity.getExpiresAt().isBefore(LocalDateTime.now())) {
            throw new RuntimeException("Refresh token is expired");
        }
        return refreshTokenEntity;
    }
}
