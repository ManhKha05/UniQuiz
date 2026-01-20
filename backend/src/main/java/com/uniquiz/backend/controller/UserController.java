package com.uniquiz.backend.controller;

import com.uniquiz.backend.dto.auth.RegisterRequest;
import com.uniquiz.backend.entity.UserEntity;
import com.uniquiz.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody RegisterRequest registerRequest) {
        UserEntity userEntity = userService.register(registerRequest);
        return ResponseEntity.ok(Map.of("message", "Đăng ký thành công"));
    }

    @GetMapping("/admin")
    public ResponseEntity<?> landingAdmin() {
        return ResponseEntity.ok("Vào trang admin thành công");
    }

    @GetMapping("/loginrequire")
    public ResponseEntity<?> loginrequire() {
        return ResponseEntity.ok("Login require");
    }
}
