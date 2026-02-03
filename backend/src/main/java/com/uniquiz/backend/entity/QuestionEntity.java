package com.uniquiz.backend.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.List;

@Entity
@Table(name = "question")
@Getter
@Setter
public class QuestionEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Integer id;

    @Column(name = "content")
    private String content;

    @Column(name = "level")
    private String level;

    @Column(name = "is_deleted", insertable = false)
    private Integer isDeleted;

    @Column(name = "createdAt", insertable = false)
    private LocalDateTime createdAt;

    @ManyToOne
    @JoinColumn(name = "subject_id")
    private SubjectEntity subject;

    @OneToMany(mappedBy = "question", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<AnswerEntity> answers;

    @ManyToMany(mappedBy = "questions")
    private List<ExamEntity> exams;

    @OneToMany(mappedBy = "question")
    private List<UserAnswerEntity> userAnswers;
}
