package com.uniquiz.backend.dto.contact;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ContactRequest {
    private String name;
    private String email;
    private String phone;
    private String title;
    private String content;
}
