package com.uniquiz.backend.controller.user;

import com.uniquiz.backend.dto.question.QuestionDTO;
import com.uniquiz.backend.dto.question.QuestionDetailDTO;
import com.uniquiz.backend.service.QuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/questions")
@CrossOrigin(origins = "http://localhost:3000")
public class QuestionController {

    @Autowired
    private QuestionService questionService;

    @GetMapping
    public ResponseEntity<?> getQuestions (
            @RequestParam(required = false) Integer page,
            @RequestParam(required = false) Integer size,
            @RequestParam(required = false) String keyword,
            @RequestParam(required = false) Integer subjectId,
            @RequestParam(required = false) String level
    ) {
        Page<QuestionDTO> questions = questionService.getQuestions(page, size, keyword, subjectId, level);
        return ResponseEntity.ok(questions);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getQuestionById(@PathVariable Integer id) {
        QuestionDetailDTO questionDetailDTO = questionService.getQuestion(id);
        return ResponseEntity.ok(questionDetailDTO);
    }


}
