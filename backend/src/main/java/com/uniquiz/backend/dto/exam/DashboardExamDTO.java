package com.uniquiz.backend.dto.exam;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class DashboardExamDTO {
    private Integer total;
    private Integer active;
    private Integer inactive;
    private Integer draft;
}
