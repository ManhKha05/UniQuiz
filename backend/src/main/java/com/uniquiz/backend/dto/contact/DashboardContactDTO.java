package com.uniquiz.backend.dto.contact;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class DashboardContactDTO {
    private Integer total;
    private Integer pending;
    private Integer resolved;
    private Integer today;
}
