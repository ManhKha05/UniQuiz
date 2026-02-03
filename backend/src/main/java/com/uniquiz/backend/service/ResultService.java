package com.uniquiz.backend.service;

import com.uniquiz.backend.dto.exam.ExamDoingDTO;
import com.uniquiz.backend.dto.exam.SubmitExamRequest;
import com.uniquiz.backend.dto.result.ResultDetailDTO;
import com.uniquiz.backend.dto.result.ResultHistoryDTO;

import java.util.List;

public interface ResultService {
    ExamDoingDTO startExam(Integer examId);
    void submitExam(SubmitExamRequest rq);
    ResultDetailDTO getResult(Integer id);
    List<ResultHistoryDTO> getResultList(String keyword, Integer subjectId);
}
