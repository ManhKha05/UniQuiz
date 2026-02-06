package com.uniquiz.backend.controller.admin;

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
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/admin/questions")
public class QuestionAdminController {

    @Autowired
    private QuestionService questionService;

    @GetMapping
    public ResponseEntity<?> getQuestions (
            @RequestParam(required = false) Integer page,
            @RequestParam(required = false) Integer pageSize,
            @RequestParam(required = false) String keyword,
            @RequestParam(required = false) Integer subjectId,
            @RequestParam(required = false) String level
    ) {
        Page<QuestionDTO> questions = questionService.getQuestions(page, pageSize, keyword, subjectId, level);
        return ResponseEntity.ok(questions);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getQuestionById(@PathVariable Integer id) {
        QuestionDetailDTO questionDetailDTO = questionService.getQuestion(id);
        return ResponseEntity.ok(questionDetailDTO);
    }

    @PostMapping
    public ResponseEntity<?> createQuestion(@RequestBody QuestionDetailDTO rq) {
        questionService.createQuestion(rq);
        return ResponseEntity.status(HttpStatus.CREATED).body(Map.of("message", "Question created successfully"));
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateQuestion(@PathVariable Integer id, @RequestBody QuestionDetailDTO rq) {
        questionService.updateQuestion(id, rq);
        return ResponseEntity.ok(Map.of("message", "Question updated successfully"));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteQuestion(@PathVariable Integer id) {
        questionService.deleteQuestion(id);
        return ResponseEntity.ok(Map.of("message", "Question deleted successfully"));
    }
}
