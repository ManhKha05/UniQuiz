package com.uniquiz.backend.controller.admin;

import com.uniquiz.backend.dto.user.UserDTO;
import com.uniquiz.backend.service.UserService;
import org.apache.coyote.BadRequestException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/admin")
public class UserAdminController {
    @Autowired
    private UserService userService;

    @GetMapping("/users")
    public ResponseEntity<?> getUsers(
            @RequestParam(required = false) Integer page,
            @RequestParam(required = false) Integer pageSize,
            @RequestParam(required = false) String keyword
    ) {
        Page<UserDTO> users = userService.getUsers(page, pageSize, keyword);
        return ResponseEntity.ok(users);
    }

    @PatchMapping("/users/{id}/status")
    public ResponseEntity<?> updateUserStatus(@PathVariable Integer id) throws BadRequestException {
        UserDTO user = userService.updateStatus(id);
        return ResponseEntity.ok().body(user);
    }
}
