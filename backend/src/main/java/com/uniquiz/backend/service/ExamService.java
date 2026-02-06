package com.uniquiz.backend.service;

import com.uniquiz.backend.dto.exam.*;
import org.springframework.data.domain.Page;

import java.util.List;

public interface ExamService {
    List<ExamUserDTO> getExamsBySubjectId(Integer subjectId);
    ExamUserDTO getExamById(Integer id);
    DashboardExamDTO getDashboard();
    Page<ExamAdminDTO> getExamsAdmin(Integer page, Integer pageSize, String keyword, Integer subjectId, String status, String sort);
    void createExam(ExamCreateRequest rq);
    void updateExam(ExamCreateRequest rq);

}
