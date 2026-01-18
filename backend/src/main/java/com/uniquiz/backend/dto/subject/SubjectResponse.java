package com.uniquiz.backend.dto.subject;

import lombok.Data;

@Data
public class SubjectResponse {
    private Integer id;
    private String name;
    private String description;
    private String imageUrl;
}
