package com.uniquiz.backend.controller;

import com.uniquiz.backend.dto.contact.ContactRequest;
import com.uniquiz.backend.service.ContactService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class ContactController {

    @Autowired
    private ContactService contactService;

    @PostMapping("contact")
    public ResponseEntity<?> addContact(@RequestBody ContactRequest contact) {
        contactService.addContact(contact);
        return ResponseEntity.ok(Map.of("message", "Gửi thành công"));
    }
}
