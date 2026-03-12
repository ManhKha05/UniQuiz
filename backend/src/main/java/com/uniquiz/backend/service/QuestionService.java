package com.uniquiz.backend.service;

import com.uniquiz.backend.dto.question.QuestionDetailDTO;
import org.springframework.data.domain.Page;

public interface QuestionService {
    void createQuestion(QuestionDetailDTO rq);
    Page<QuestionDetailDTO> getQuestions(Integer page, Integer size, String keyword, Integer subjectId, String level);
    QuestionDetailDTO getQuestion(Integer id);
    void updateQuestion(Integer id, QuestionDetailDTO rq);
    void deleteQuestion(Integer id);
}
