package com.uniquiz.backend.controller.user;

import com.uniquiz.backend.dto.auth.ForgotPasswordRequest;
import com.uniquiz.backend.dto.auth.RegisterRequest;
import com.uniquiz.backend.dto.auth.ResetPasswordRequest;
import com.uniquiz.backend.dto.jwt.JwtResponse;
import com.uniquiz.backend.dto.auth.LoginRequest;
import com.uniquiz.backend.entity.RefreshTokenEntity;
import com.uniquiz.backend.entity.UserEntity;
import com.uniquiz.backend.security.CustomUserDetails;
import com.uniquiz.backend.security.JwtUtil;
import com.uniquiz.backend.service.AuthService;
import com.uniquiz.backend.service.RefreshTokenService;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletResponse;
import org.apache.coyote.BadRequestException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import javax.naming.ConfigurationException;
import java.util.Map;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class AuthController {

    private final AuthenticationManager authenticationManager;

    private final JwtUtil jwtUtil;

    private final AuthService authService;

    private final RefreshTokenService  refreshTokenService;

    public AuthController(AuthenticationManager authenticationManager, JwtUtil jwtUtil, AuthService authService, RefreshTokenService refreshTokenService) {
        this.authenticationManager = authenticationManager;
        this.jwtUtil = jwtUtil;
        this.authService = authService;
        this.refreshTokenService = refreshTokenService;
    }

    @PostMapping("/auth/login")
    public ResponseEntity<JwtResponse> login(@RequestBody LoginRequest loginRequest, HttpServletResponse response) {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword())
        );
        CustomUserDetails userDetails = (CustomUserDetails) authentication.getPrincipal();

        if (userDetails.getStatus().equals("BLOCKED")) {
            throw new RuntimeException("Tài khoản của bạn đã bị khóa, vui lòng liên hệ quản trị viên!");
        }

        String token = jwtUtil.generateToken(userDetails);
        String refreshToken = jwtUtil.generateToken(userDetails);

        refreshTokenService.saveRefreshToken(token, userDetails.getUser());

        Cookie cookie = new Cookie("refreshToken", refreshToken);
        cookie.setHttpOnly(true);
        cookie.setSecure(true);
        cookie.setPath("/");
        response.addCookie(cookie);

        String role = userDetails.getAuthorities().iterator().next().getAuthority();

        JwtResponse jwtResponse = new JwtResponse(token, role, userDetails.getUsername());
        System.out.println(jwtResponse);

        return ResponseEntity.ok(jwtResponse);
    }

    @PostMapping("/auth/register")
    public ResponseEntity<?> register(@RequestBody RegisterRequest registerRequest) {
        UserEntity userEntity = authService.register(registerRequest);
        return ResponseEntity.status(HttpStatus.CREATED).body(Map.of("message", "Đăng ký thành công"));
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

    @PostMapping("/auth/logout")
    public ResponseEntity<?> logout(
            @CookieValue(value = "refreshToken", required = false) String refreshToken,
            HttpServletResponse response
    ) {
        // 1. Revoke refresh token trong DB
        if (refreshToken != null) {
            refreshTokenService.revoke(refreshToken);
        }

        // 2. Xoá cookie refresh token
        Cookie cookie = new Cookie("refreshToken", null);
        cookie.setHttpOnly(true);
        cookie.setSecure(true);
        cookie.setPath("/");
        cookie.setMaxAge(0);

        response.addCookie(cookie);

        return ResponseEntity.ok().build();
    }

    @PostMapping("auth/refresh")
    public ResponseEntity<?> refreshToken(
            @CookieValue(value = "refreshToken") String refreshToken,
            HttpServletResponse response
    ) {
        RefreshTokenEntity tokenEntity = refreshTokenService.validate(refreshToken);
        UserEntity userEntity = tokenEntity.getUser();
        CustomUserDetails userDetails = new CustomUserDetails(userEntity);
        String newAccessToken = jwtUtil.generateToken(userDetails);
//        refreshTokenService.saveRefreshToken(refreshToken, userEntity);

//        Cookie cookie = new Cookie("refreshToken", newAccessToken);
//        cookie.setHttpOnly(true);
//        cookie.setSecure(true); // HTTPS
//        cookie.setPath("/");
//        cookie.setMaxAge(7 * 24 * 60 * 60); // 7 ngày
//
//        response.addCookie(cookie);

        return ResponseEntity.ok(Map.of("accessToken", newAccessToken));
    }
}
