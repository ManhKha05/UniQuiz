package com.uniquiz.backend.controller.user;

import com.uniquiz.backend.dto.contact.ContactDTO;
import com.uniquiz.backend.dto.contact.DashboardContactDTO;
import com.uniquiz.backend.dto.contact.UpdateContactStatusRequest;
import com.uniquiz.backend.service.ContactService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class ContactController {

    @Autowired
    private ContactService contactService;

    @PostMapping("contact")
    public ResponseEntity<?> addContact(@RequestBody ContactDTO contact) {
        contactService.addContact(contact);
        return ResponseEntity.ok(Map.of("message", "Gửi thành công"));
    }


}
