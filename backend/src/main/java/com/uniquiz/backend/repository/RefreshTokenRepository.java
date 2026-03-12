package com.uniquiz.backend.repository;

import com.uniquiz.backend.entity.RefreshTokenEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RefreshTokenRepository extends JpaRepository<RefreshTokenEntity, Integer> {
    RefreshTokenEntity findByToken(String token);
}
