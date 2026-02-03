package com.uniquiz.backend.controller;

import com.uniquiz.backend.dto.auth.ForgotPasswordRequest;
import com.uniquiz.backend.dto.auth.RegisterRequest;
import com.uniquiz.backend.dto.auth.ResetPasswordRequest;
import com.uniquiz.backend.dto.jwt.JwtResponse;
import com.uniquiz.backend.dto.auth.LoginRequest;
import com.uniquiz.backend.entity.UserEntity;
import com.uniquiz.backend.security.JwtUtil;
import com.uniquiz.backend.service.AuthService;
import org.apache.coyote.BadRequestException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class AuthController {

    private final AuthenticationManager authenticationManager;

    private final JwtUtil jwtUtil;

    private final AuthService authService;

    public AuthController(AuthenticationManager authenticationManager, JwtUtil jwtUtil, AuthService authService) {
        this.authenticationManager = authenticationManager;
        this.jwtUtil = jwtUtil;
        this.authService = authService;
    }

    @PostMapping("/auth/login")
    public ResponseEntity<JwtResponse> login(@RequestBody LoginRequest loginRequest) {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword())
        );
        UserDetails userDetails = (UserDetails) authentication.getPrincipal();
        String token = jwtUtil.generateToken(userDetails);
        String role = userDetails.getAuthorities().iterator().next().getAuthority();

        JwtResponse jwtResponse = new JwtResponse(token, role, userDetails.getUsername());
        System.out.println(jwtResponse);

        return ResponseEntity.ok(jwtResponse);
    }

    @PostMapping("/auth/register")
    public ResponseEntity<?> register(@RequestBody RegisterRequest registerRequest) {
        UserEntity userEntity = authService.register(registerRequest);
        return ResponseEntity.ok(Map.of("message", "Đăng ký thành công"));
    }


    @PostMapping("/auth/forgot-password")
    public ResponseEntity<?> forgotPassword(@RequestBody ForgotPasswordRequest request) {
        authService.processForgotPassword(request.getEmail());
        return ResponseEntity.ok(Map.of("message",
                "Nếu email tồn tại, chúng tôi đã gửi link đặt lại mật khẩu"));
    }

    @GetMapping("auth/reset-password")
    public ResponseEntity<?> validTokenResetPassword(@RequestParam("token") String token) throws BadRequestException {
        String username = authService.getUsernameByTokenResetPassword(token);
        return ResponseEntity.ok(Map.of("username", username ));
    }

    @PostMapping("auth/reset-password")
    public ResponseEntity<?> resetPassword(@RequestBody ResetPasswordRequest req) throws BadRequestException {
        authService.resetPassword(req.getToken(), req.getPassword());
        return ResponseEntity.ok("Thay đổi mật khẩu thành công");
    }
}
