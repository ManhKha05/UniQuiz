package com.uniquiz.backend.dto.user;

import lombok.Data;

@Data
public class LoginRequest {
    private String username;
    private String password;
}
