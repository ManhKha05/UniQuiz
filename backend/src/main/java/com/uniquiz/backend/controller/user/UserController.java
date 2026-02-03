package com.uniquiz.backend.controller;

import com.uniquiz.backend.dto.auth.RegisterRequest;
import com.uniquiz.backend.dto.user.UserDTO;
import com.uniquiz.backend.entity.UserEntity;
import com.uniquiz.backend.service.UserService;
import org.apache.coyote.BadRequestException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {

    @Autowired
    private UserService userService;

//    @GetMapping("/admin")
//    public ResponseEntity<?> landingAdmin() {
//        return ResponseEntity.ok("Vào trang admin thành công");
//    }
//
//    @GetMapping("/loginrequire")
//    public ResponseEntity<?> loginrequire() {
//        return ResponseEntity.ok("Login require");
//    }

    @GetMapping("/users")
    public List<UserDTO> getUsers() {
        return userService.getUsers();
    }

    @GetMapping("/users/search")
    public List<UserDTO> searchUsers(@RequestParam String keyword) {
        return userService.searchUsers(keyword);
    }

    @PutMapping("/users/{id}/status")
    public ResponseEntity<?> updateUserStatus(@PathVariable Integer id) throws BadRequestException {
        UserDTO user = userService.updateStatus(id);
        return ResponseEntity.ok().body(user);
    }
}
