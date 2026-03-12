package com.uniquiz.backend.service;

import com.uniquiz.backend.entity.RefreshTokenEntity;
import com.uniquiz.backend.entity.UserEntity;

public interface RefreshTokenService {
    void saveRefreshToken(String token, UserEntity user);
    void revoke(String token);
    RefreshTokenEntity validate(String token);
}
