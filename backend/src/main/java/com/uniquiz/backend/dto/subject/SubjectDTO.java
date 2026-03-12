package com.uniquiz.backend.dto.subject;

import lombok.Data;

@Data
public class SubjectDTO {
    private Integer id;
    private String name;
    private String description;
    private String imageUrl;
    private String status;
}
