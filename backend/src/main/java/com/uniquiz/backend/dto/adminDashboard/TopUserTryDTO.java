package com.uniquiz.backend.dto.adminDashboard;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class TopUserTryDTO {
    String name;
    Long total;
}
