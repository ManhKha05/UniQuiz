package com.uniquiz.backend.repository;

import com.uniquiz.backend.entity.ResetPasswordTokenEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ResetPasswordTokenRepository extends JpaRepository<ResetPasswordTokenEntity, Integer> {
    Optional<ResetPasswordTokenEntity> findByTokenHash(String token);
}
