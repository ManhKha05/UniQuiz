package com.uniquiz.backend.dto.adminDashboard;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class AttemptsRecentDTO {
    private LocalDate date;
    private Long quantity;
}
