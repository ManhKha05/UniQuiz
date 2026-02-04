package com.uniquiz.backend.service.impl;

import com.uniquiz.backend.dto.answer.AnswerDoingDTO;
import com.uniquiz.backend.dto.answer.AnswerResultDTO;
import com.uniquiz.backend.dto.answer.AnswerSubmitDTO;
import com.uniquiz.backend.dto.exam.AdminExamResultDTO;
import com.uniquiz.backend.dto.exam.ExamDoingDTO;
import com.uniquiz.backend.dto.exam.SubmitExamRequest;
import com.uniquiz.backend.dto.question.QuestionDoingDTO;
import com.uniquiz.backend.dto.question.QuestionResultDTO;
import com.uniquiz.backend.dto.result.ResultDetailDTO;
import com.uniquiz.backend.dto.result.ResultHistoryDTO;
import com.uniquiz.backend.entity.*;
import com.uniquiz.backend.repository.*;
import com.uniquiz.backend.security.CustomUserDetails;
import com.uniquiz.backend.service.ResultService;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import javax.xml.transform.Result;
import java.time.Duration;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Service
public class ResultServiceImpl implements ResultService {

    @Autowired
    private ResultRepository resultRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ExamRepository examRepository;

    @Autowired
    private AnswerRepository answerRepository;

    @Autowired
    private UserAnswerRepository userAnswerRepository;

    @Override
    @Transactional
    public ExamDoingDTO startExam(Integer examId) {
        ResultEntity result = new ResultEntity();
        UserDetails user =  (UserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        UserEntity userEntity = userRepository.findByUsername(user.getUsername());
        result.setUser(userEntity);
        ExamEntity examEntity = examRepository.findById(examId).get();
        result.setExam(examEntity);
        result.setStartTime(LocalDateTime.now());
        resultRepository.save(result);

        ExamDoingDTO exam = new ExamDoingDTO();
        exam.setSubjectName(examEntity.getSubject().getName());
        exam.setTitle(examEntity.getTitle());
        exam.setDuration(examEntity.getDuration());
        exam.setResultId(result.getId());

        List<QuestionDoingDTO> questions = new ArrayList<>();
        List<QuestionEntity> questionEntities = examEntity.getQuestions();
        for (QuestionEntity questionEntity : questionEntities) {
            QuestionDoingDTO question = new QuestionDoingDTO();
            question.setId(questionEntity.getId());
            question.setContent(questionEntity.getContent());

            List<AnswerDoingDTO> answers = questionEntity.getAnswers().stream().map(a -> new AnswerDoingDTO(
                    a.getId(),
                    a.getContent()
            )).toList();
            question.setAnswers(answers);
            questions.add(question);
        }
        exam.setQuestions(questions);
        return exam;
    }

    @Override
    @Transactional
    public void submitExam(SubmitExamRequest rq) {
        int totalCorrect = 0;
        int totalQuestion = 0;

        for (AnswerSubmitDTO answer : rq.getAnswers()) {
            AnswerEntity answerEntity = answerRepository.findById(answer.getAnswerId()).get();

            UserAnswerEntity userAnswerEntity = new UserAnswerEntity();
            userAnswerEntity.setResult(resultRepository.findById(rq.getResultId()).get());
            userAnswerEntity.setQuestion(answerEntity.getQuestion());
            userAnswerEntity.setAnswer(answerEntity);
            userAnswerRepository.save(userAnswerEntity);

//            if (answerEntity.getIsCorrect() == 1) {
//                totalCorrect++;
//            }
        }

        ResultEntity result = resultRepository.findById(rq.getResultId()).get();
//        totalQuestion = result.getExam().getQuestions().size();
        result.setSubmitTime(LocalDateTime.now());
        resultRepository.save(result);
    }

    @Override
    public ResultDetailDTO getResult(Integer id) {
        int totalCorrect = 0;
        int totalWrong = 0;

        ResultDetailDTO result = new ResultDetailDTO();

        ResultEntity resultEntity = resultRepository.findById(id).get();
        result.setExamId(resultEntity.getExam().getId());
        result.setTitle(resultEntity.getExam().getTitle());
        result.setGrade(calulateGrade(resultEntity.getId()));

        int totalQuestion = resultEntity.getExam().getQuestions().size();
        result.setTotalQuestions(totalQuestion);

        LocalDateTime start = resultEntity.getStartTime();
        LocalDateTime end = resultEntity.getSubmitTime();
        result.setDuration(Duration.between(start, end).toSeconds());

        result.setSubmittedDate(resultEntity.getSubmitTime());

        List<QuestionResultDTO>  questions = new ArrayList<>();
        for (QuestionEntity questionEntity : resultEntity.getExam().getQuestions()) {
            QuestionResultDTO question = new QuestionResultDTO();

            question.setId(questionEntity.getId());
            question.setContent(questionEntity.getContent());

            int correctAnswer = 0;
            for (AnswerEntity answerEntity : questionEntity.getAnswers()) {
                AnswerResultDTO answer = new AnswerResultDTO(answerEntity.getId(), answerEntity.getContent());
                if (answerEntity.getIsCorrect() == 1) {
                    correctAnswer = answerEntity.getId();
                }
                question.getAnswers().add(answer);
            }
            question.setCorrectAnswerId(correctAnswer);

            int selectedAnswerId = -1;
            UserAnswerEntity userAnswerEntity = userAnswerRepository.findByResultIdAndQuestionId(id,  questionEntity.getId());
            if (userAnswerEntity != null) {
                selectedAnswerId = userAnswerEntity.getAnswer().getId();
            }
            question.setSelectedAnswerId(selectedAnswerId);

            if (correctAnswer == selectedAnswerId) {
                totalCorrect++;
                question.setStatus("Correct");
            } else if (selectedAnswerId != -1) {
                totalWrong++;
                question.setStatus("Wrong");
            }
            questions.add(question);
        }
        result.setTotalCorrect(totalCorrect);
        result.setTotalWrong(totalWrong);

        result.setQuestions(questions);

        return result;
    }

    @Override
    public List<ResultHistoryDTO> getResultList(String keyword, Integer subjectId) {
        CustomUserDetails user = (CustomUserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        List<ResultEntity> results = resultRepository.findAllByUserId(user.getId(), keyword, subjectId);

        List<ResultHistoryDTO> resultHistory = new ArrayList<>();
        for (ResultEntity resultEntity : results) {
            ResultHistoryDTO result = new ResultHistoryDTO();

            result.setResultId(resultEntity.getId());
            result.setExamTitle(resultEntity.getExam().getTitle());
            result.setSubjectName(resultEntity.getExam().getSubject().getName());
            result.setDuration(resultEntity.getExam().getDuration());
            result.setTotalQuestions(resultEntity.getExam().getQuestions().size());
            result.setScore(calulateGrade(resultEntity.getId()));
            result.setSubmittedAt(resultEntity.getSubmitTime());

            resultHistory.add(result);
        }
        return resultHistory;
    }

    @Override
    public Page<AdminExamResultDTO> getResultListAdmin(
            Integer page,  Integer pageSize, String keyword, Integer subjectId, Integer examId, String sort
    ) {
        Sort sortBy = null;
        if (sort.equals("newest")) {
            sortBy = Sort.by("submitTime").descending();
        } else if (sort.equals("desc")) {
            sortBy = Sort.by("score").descending();
        } else if (sort.equals("asc")) {
            sortBy = Sort.by("score").ascending();
        }

        Pageable pageable = PageRequest.of(page, pageSize, sortBy);

        Page<ResultEntity> resultEntities = resultRepository.findResultsAdmin(keyword, subjectId, examId, pageable);
        Page<AdminExamResultDTO> results = resultEntities.map(r -> new AdminExamResultDTO(
                r.getId(),
                r.getUser().getFullName(),
                r.getUser().getUsername(),
                r.getExam().getTitle(),
                r.getExam().getSubject().getName(),
                calulateGrade(r.getId()),
                Duration.between(r.getStartTime(), r.getSubmitTime()).toSeconds(),
                r.getSubmitTime()
        ));
        return results;
    }

    @Override
    public double calulateGrade(Integer resultId) {
        int totalCorrect = 0;
        int totalQuestion = 0;

        ResultEntity resultEntity = resultRepository.findById(resultId).get();
        totalQuestion = resultEntity.getExam().getQuestions().size();
        for (UserAnswerEntity userAnswerEntity : resultEntity.getUserAnswers()) {
            AnswerEntity answerEntity = userAnswerEntity.getAnswer();

            if (answerEntity.getIsCorrect() == 1) {
                totalCorrect++;
            }
        }
        return (1.0 *  totalCorrect) / totalQuestion * 10 ;
    }


}
