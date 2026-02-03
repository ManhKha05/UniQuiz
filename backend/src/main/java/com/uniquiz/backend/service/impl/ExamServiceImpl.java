package com.uniquiz.backend.service.impl;

import com.uniquiz.backend.converter.ExamConverter;
import com.uniquiz.backend.dto.answer.AnswerSubmitDTO;
import com.uniquiz.backend.dto.exam.*;
import com.uniquiz.backend.entity.ExamEntity;
import com.uniquiz.backend.entity.QuestionEntity;
import com.uniquiz.backend.entity.ResultEntity;
import com.uniquiz.backend.entity.SubjectEntity;
import com.uniquiz.backend.repository.AnswerRepository;
import com.uniquiz.backend.repository.ExamRepository;
import com.uniquiz.backend.repository.QuestionRepository;
import com.uniquiz.backend.repository.SubjectRepository;
import com.uniquiz.backend.service.ExamService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.*;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
public class ExamServiceImpl implements ExamService {

    private final SubjectRepository subjectRepository;

    private final ExamRepository examRepository;

    private final ExamConverter examConverter;

    private final QuestionRepository questionRepository;


    public ExamServiceImpl(ExamRepository examRepository, ExamConverter examConverter, SubjectRepository subjectRepository, QuestionRepository questionRepository) {
        this.examRepository = examRepository;
        this.examConverter = examConverter;
        this.subjectRepository = subjectRepository;
        this.questionRepository = questionRepository;
    }

    @Override
    public List<ExamUserDTO> getExamsBySubjectId(Integer subjectId) {
        List<ExamEntity> examEntities = examRepository.findBySubjectIdAndStatus(subjectId, "ACTIVE");
        List<ExamUserDTO> examUserDTOS = new ArrayList<>();
        for (ExamEntity examEntity : examEntities) {
            ExamUserDTO examUserDTO = examConverter.toExamUserDTO(examEntity);
            examUserDTO.setTotalQuestions(examEntity.getQuestions().size());
            examUserDTO.setSubjectName(examEntity.getSubject().getName());
            examUserDTOS.add(examUserDTO);
        }
        return examUserDTOS;
    }

    @Override
    public ExamUserDTO getExamById(Integer id) {
        ExamEntity examEntity = examRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Exam Not Found"));
        ExamUserDTO examUserDTO = examConverter.toExamUserDTO(examEntity);
        examUserDTO.setTotalQuestions(examEntity.getQuestions().size());
        return examUserDTO;
    }

    @Override
    public DashboardExamDTO getDashboard() {
        DashboardExamDTO dashboardExamDTO = new DashboardExamDTO();
        dashboardExamDTO.setTotal(examRepository.total());
        dashboardExamDTO.setActive(examRepository.active());
        dashboardExamDTO.setInactive(examRepository.inactive());
        dashboardExamDTO.setDraft(examRepository.draft());
        return dashboardExamDTO;
    }

    @Override
    public Page<ExamAdminDTO> getExamsAdmin(Integer page, Integer size, String keyword, Integer subjectId, String status, String sort) {
        if (page == null || size == null) {
            page = 0;
            size = Integer.MAX_VALUE;
        }
        Sort sortObj = null;
        if (sort.equals("NEWEST")) {
            sortObj = Sort.by("createdAt").descending();
        } else if (sort.equals("OLDEST")) {
            sortObj = Sort.by("createdAt").ascending();
        }

        Pageable pageable = PageRequest.of(page, size, sortObj);

        Page<ExamEntity> examEntities = examRepository.findExamsAdminList(keyword, subjectId, status, pageable);
        Page<ExamAdminDTO> examAdminDTOS = examEntities.map(examEntity -> {
            ExamAdminDTO exam = examConverter.toExamAdminDTO(examEntity);

            exam.setSubjectId(examEntity.getSubject().getId());
            exam.setSubjectName(examEntity.getSubject().getName());
            exam.setTotalQuestions(examEntity.getQuestions().size());

            Integer totalAttempts = examEntity.getResults().size();
            Double totalGrade = 0.0;

            exam.setTotalAttempts(totalAttempts);
            if (totalAttempts == 0) {
                exam.setAverageScore(0.0);
            } else {
                for (ResultEntity result : examEntity.getResults()) {
                    totalGrade += result.getScore();
                }
                exam.setAverageScore(totalGrade / totalAttempts);
            }

            exam.setQuestionIds(examEntity.getQuestions().stream().map(q -> q.getId()).toList());
            return exam;
        });
        return examAdminDTOS;
    }

    @Override
    public void createExam(ExamCreateRequest rq) {
        ExamEntity examEntity = examConverter.requestToExamEntity(rq);

        SubjectEntity subject = subjectRepository.findById(rq.getSubjectId()).get();
        examEntity.setSubject(subject);


        List<QuestionEntity> questionEntities = questionRepository.findAllById(rq.getQuestionIds());
        examEntity.setQuestions(questionEntities);
        examRepository.save(examEntity);
    }

    @Override
    public void updateExam(ExamCreateRequest rq) {
        ExamEntity exam = examRepository.findById(rq.getId())
                .orElseThrow(() -> new RuntimeException("Exam not found"));
        exam.setTitle(rq.getTitle());
        exam.setDuration(rq.getDuration());
        exam.setStatus(rq.getStatus());

        exam.getQuestions().clear();

        SubjectEntity subject = subjectRepository.findById(rq.getSubjectId())
                .orElseThrow(() -> new RuntimeException("Subject not found"));
        exam.setSubject(subject);

        List<QuestionEntity> questions =
                questionRepository.findAllById(rq.getQuestionIds());
        exam.getQuestions().addAll(questions);
        examRepository.save(exam);
    }

}
