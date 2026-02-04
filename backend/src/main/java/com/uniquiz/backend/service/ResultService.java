package com.uniquiz.backend.service;

import com.uniquiz.backend.dto.exam.AdminExamResultDTO;
import com.uniquiz.backend.dto.exam.ExamDoingDTO;
import com.uniquiz.backend.dto.exam.SubmitExamRequest;
import com.uniquiz.backend.dto.result.ResultDetailDTO;
import com.uniquiz.backend.dto.result.ResultHistoryDTO;
import org.springframework.data.domain.Page;

import java.util.List;

public interface ResultService {
    ExamDoingDTO startExam(Integer examId);
    void submitExam(SubmitExamRequest rq);
    ResultDetailDTO getResult(Integer id);
    List<ResultHistoryDTO> getResultList(String keyword, Integer subjectId);
    Page<AdminExamResultDTO> getResultListAdmin(Integer page, Integer pageSize, String keyword, Integer subjectId, Integer examId, String sort);
    double calulateGrade(Integer resultId);
}
