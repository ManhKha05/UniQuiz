package com.uniquiz.backend.dto.adminDashboard;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class TopExamDTO {
    private String title;
    private String subject;
    private Long totalAttempts;
}
