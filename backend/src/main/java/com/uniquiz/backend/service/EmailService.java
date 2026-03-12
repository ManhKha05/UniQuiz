package com.uniquiz.backend.service;

public interface EmailService {
    void sendResetPasswordEmail(String to, String link);
}
