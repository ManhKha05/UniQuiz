package com.uniquiz.backend.controller.user;

import com.uniquiz.backend.dto.result.ResultDetailDTO;
import com.uniquiz.backend.dto.result.ResultHistoryDTO;
import com.uniquiz.backend.repository.ResultRepository;
import com.uniquiz.backend.service.ResultService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class ResultController {
    @Autowired
    private ResultService resultService;

    @GetMapping("/results/{id}")
    public ResponseEntity<ResultDetailDTO> getResult(@PathVariable Integer id) {
        ResultDetailDTO dto = resultService.getResult(id);
        return ResponseEntity.ok(dto);
    }

    @GetMapping("exam-history")
    public ResponseEntity<List<ResultHistoryDTO>> getExamHistory(
            @RequestParam(required = false) String keyword,
            @RequestParam(required = false) Integer subjectId
    ) {
        List<ResultHistoryDTO> resultHistories = resultService.getResultList(keyword, subjectId);
        return ResponseEntity.ok().body(resultHistories);
    }
}
