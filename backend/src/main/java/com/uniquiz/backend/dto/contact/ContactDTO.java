package com.uniquiz.backend.dto.contact;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
public class ContactRequest {
    private Integer id;
    private String name;
    private String email;
    private String phone;
    private String title;
    private String content;
    private String status;
    private LocalDateTime createdAt;
}
