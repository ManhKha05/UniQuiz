package com.uniquiz.backend.service.impl;

import com.uniquiz.backend.service.EmailService;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailServiceImpl implements EmailService {

    private final JavaMailSender mailSender;

    public EmailServiceImpl(JavaMailSender mailSender) {
        this.mailSender = mailSender;
    }

    @Value("${spring.mail.username}")
    private String from;

    @Override
    public void sendResetPasswordEmail(String to, String link) {

        SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom(from);
        message.setTo(to);
        message.setSubject("Đặt lại mật khẩu");
        message.setText(
                "Bạn đã yêu cầu đặt lại mật khẩu.\n\n" +
                "Nhấn vào link dưới đây (hiệu lực 15 phút):\n" +
                link + "\n\n" +
                "Nếu bạn không yêu cầu, hãy bỏ qua email này."
        );

        mailSender.send(message);

    }
}
