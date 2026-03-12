package com.uniquiz.backend.service.impl;

import com.uniquiz.backend.converter.QuestionConverter;
import com.uniquiz.backend.dto.answer.AnswerDTO;
import com.uniquiz.backend.dto.question.QuestionDetailDTO;
import com.uniquiz.backend.entity.AnswerEntity;
import com.uniquiz.backend.entity.QuestionEntity;
import com.uniquiz.backend.entity.SubjectEntity;
import com.uniquiz.backend.exceptions.BadRequestException;
import com.uniquiz.backend.repository.AnswerRepository;
import com.uniquiz.backend.repository.QuestionRepository;
import com.uniquiz.backend.repository.SubjectRepository;
import com.uniquiz.backend.service.QuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
public class QuestionServiceImpl implements QuestionService {

    @Autowired
    private QuestionRepository questionRepository;

    @Autowired
    private QuestionConverter questionConverter;

    @Autowired
    private AnswerRepository answerRepository;

    @Autowired
    private SubjectRepository subjectRepository;

    @Override
    public Page<QuestionDetailDTO> getQuestions(Integer page, Integer size, String keyword, Integer subjectId, String level) {
        if (page == null || size == null) {
            page = 0;
            size = Integer.MAX_VALUE;
        }
        Pageable pageable = PageRequest.of(page, size);
        Page<QuestionEntity> questions = questionRepository.search(keyword, subjectId, level, pageable);
        Page<QuestionDetailDTO> questionDTOS = questions.map(questionEntity -> {
            QuestionDetailDTO questionDTO = questionConverter.toDetailDTO(questionEntity);
            questionDTO.setSubjectName(questionEntity.getSubject().getName());
            return questionDTO;
        });
        return questionDTOS;
    }

    @Override
    public QuestionDetailDTO getQuestion(Integer id) {
        QuestionEntity questionEntity = questionRepository.findById(id)
                .orElseThrow(() -> new BadRequestException("Question id " + id + " not found"));
        QuestionDetailDTO questionDetailDTO = questionConverter.toDetailDTO(questionEntity);
        questionDetailDTO.setSubjectId(questionEntity.getSubject().getId());
        
//        List<AnswerDTO> answers = new ArrayList<>();
//        List<Integer> correctAnswers = new ArrayList<>();
//        for (int i = 0; i < questionEntity.getAnswers().size(); i++) {
//            AnswerEntity answerEntity = questionEntity.getAnswers().get(i);
//            AnswerDTO answerDTO = new AnswerDTO();
//            answerDTO.setId(answerEntity.getId());
//            answerDTO.setContent(answerEntity.getContent());
//            answerDTO.setIsCorrect(answerEntity.getIsCorrect());
//            if (answerEntity.getIsCorrect() == 1) correctAnswers.add(i);
//            answers.add(answerDTO);
//        }
//        questionDetailDTO.setCorrectAnswer(correctAnswers);
//        questionDetailDTO.setAnswers(answers);
        return questionDetailDTO;
    }

    @Override
    public void createQuestion(QuestionDetailDTO rq) {
        SubjectEntity subject = subjectRepository.findById(rq.getSubjectId())
                .orElseThrow(() -> new BadRequestException("Subject id " + rq.getSubjectId() + " not found"));

        QuestionEntity questionEntity = new QuestionEntity();
        questionEntity.setSubject(subject);
        questionEntity.setContent(rq.getContent());
        questionEntity.setLevel(rq.getLevel());
        questionEntity.setType(rq.getType());

        List<AnswerEntity> answers = new ArrayList<>();
        for (int i = 0; i < rq.getAnswers().size(); i++) {
            AnswerDTO answer = rq.getAnswers().get(i);

            AnswerEntity answerEntity = new AnswerEntity();
            answerEntity.setContent(answer.getContent());
            answerEntity.setQuestion(questionEntity);
            if (rq.getCorrectAnswer().contains(i)) {
                answerEntity.setIsCorrect(1);
            } else  {
                answerEntity.setIsCorrect(0);
            }
            answers.add(answerEntity);
        }

        questionEntity.setAnswers(answers);
        questionRepository.save(questionEntity);
    }

    @Override
    @Transactional
    public void updateQuestion(Integer id, QuestionDetailDTO rq) {
        QuestionEntity questionEntity = questionRepository.findById(id)
                .orElseThrow(() -> new BadRequestException("Question id " + id + " not found"));
        questionEntity.setContent(rq.getContent());
        questionEntity.setLevel(rq.getLevel());

        SubjectEntity subject = subjectRepository.findById(rq.getSubjectId())
                .orElseThrow(() -> new BadRequestException("Subject id " + rq.getSubjectId() + " not found"));
        questionEntity.setSubject(subject);

        List<AnswerEntity> answers = new ArrayList<>();
        for (int i = 0; i < rq.getAnswers().size(); i++) {
            AnswerDTO answer = rq.getAnswers().get(i);

            AnswerEntity answerEntity = answerRepository.findById(answer.getId())
                    .orElseThrow(() -> new BadRequestException("Answer id " + answer.getId() + " not found"));
            answerEntity.setContent(answer.getContent());
            if (rq.getCorrectAnswer().contains(i)) {
                answerEntity.setIsCorrect(1);
            } else {
                answerEntity.setIsCorrect(0);
            }
            answerRepository.save(answerEntity);
        }

        questionRepository.save(questionEntity);
    }

    @Override
    public void deleteQuestion(Integer id) {
        QuestionEntity question = questionRepository.findById(id)
                .orElseThrow(() -> new BadRequestException("Question id " + id + " not found"));
        question.setIsDeleted(1);
        questionRepository.save(question);
    }
}
