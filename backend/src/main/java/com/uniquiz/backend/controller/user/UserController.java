package com.uniquiz.backend.controller.user;

import com.uniquiz.backend.dto.user.UserDTO;
import com.uniquiz.backend.service.UserService;
import org.apache.coyote.BadRequestException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class UserController {

//    @Autowired
//    private UserService userService;
//
//    @GetMapping("/users")
//    public List<UserDTO> getUsers() {
//        return userService.getUsers();
//    }
//
//    @GetMapping("/users/search")
//    public List<UserDTO> searchUsers(@RequestParam String keyword) {
//        return userService.searchUsers(keyword);
//    }
//
//    @PutMapping("/users/{id}/status")
//    public ResponseEntity<?> updateUserStatus(@PathVariable Integer id) throws BadRequestException {
//        UserDTO user = userService.updateStatus(id);
//        return ResponseEntity.ok().body(user);
//    }
}
