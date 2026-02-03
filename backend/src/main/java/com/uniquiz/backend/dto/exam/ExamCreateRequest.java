package com.uniquiz.backend.dto.exam;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class ExamCreateRequest {
    private Integer id;
    private String title;
    private Integer subjectId;
    private Integer duration;
    private String status;
    private List<Integer> questionIds;
}
