package com.uniquiz.backend.exceptions;

import com.uniquiz.backend.dto.error.ErrorResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.time.LocalDateTime;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(BadRequestException.class)
    public ResponseEntity<?> handleBadRequestException(BadRequestException e) {
        ErrorResponse response = ErrorResponse.builder()
                .status(HttpStatus.BAD_REQUEST.value())
                .errorCode("BAD_REQUEST")
                .message(e.getMessage())
                .timestamp(LocalDateTime.now())
                .build()
                ;
        return ResponseEntity.badRequest().body(response);
    }

    @ExceptionHandler(BadCredentialsException.class)
    public ResponseEntity<?> handleBadCredentialsException(BadCredentialsException e) {
        ErrorResponse response = ErrorResponse.builder()
                .status(HttpStatus.BAD_REQUEST.value())
                .errorCode("BAD_CREDENTIALS")
                .message("Bạn đã nhập sai tài khoản hoặc mật khẩu!")
                .timestamp(LocalDateTime.now())
                .build()
                ;
        return ResponseEntity.badRequest().body(response);
    }

//    @ExceptionHandler(UsernameNotFoundException.class)
//    public ResponseEntity<?> handleUsernameNotFoundException(UsernameNotFoundException e) {
//        ErrorResponse response = ErrorResponse.builder()
//                .status(HttpStatus.BAD_REQUEST.value())
//                .errorCode("USERNAME_NOT_FOUND")
//                .message(e.getMessage())
//                .timestamp(LocalDateTime.now())
//                .build()
//                ;
//        return ResponseEntity.badRequest().body(response);
//    }

    @ExceptionHandler(UserAlreadyExistsException.class)
    public ResponseEntity<?> handleUserAlreadyExistsException(UserAlreadyExistsException e) {
        ErrorResponse response = ErrorResponse.builder()
                .status(HttpStatus.BAD_REQUEST.value())
                .errorCode("USER_ALREADY_EXISTS")
                .message(e.getMessage())
                .timestamp(LocalDateTime.now())
                .build()
                ;
        return ResponseEntity.badRequest().body(response);
    }

    @ExceptionHandler(RuntimeException.class)
    public ResponseEntity<?> handleRuntimeException(RuntimeException e) {
        ErrorResponse response = ErrorResponse.builder()
                .status(HttpStatus.INTERNAL_SERVER_ERROR.value())
                .errorCode("INTERNAL_SERVER_ERROR")
                .message(e.getMessage())
                .timestamp(LocalDateTime.now())
                .build()
                ;
        return ResponseEntity.badRequest().body(response);
    }
}
