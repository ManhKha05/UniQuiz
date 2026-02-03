package com.uniquiz.backend.dto.user;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
public class UserDTO {
    private Integer id;
    private String username;
    private String fullName;
    private String email;
    private String phone;
    private String status;
    private LocalDateTime createdAt;
}
