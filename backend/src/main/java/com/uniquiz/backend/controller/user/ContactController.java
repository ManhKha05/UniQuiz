package com.uniquiz.backend.controller;

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

    @GetMapping("contacts/dashboard")
    public ResponseEntity<?> getDashboard() {
        DashboardContactDTO dashboard =  contactService.getDashboardContact();
        return ResponseEntity.ok(dashboard);
    }

    @GetMapping("contacts")
    public ResponseEntity<?> getAllContacts(
            @RequestParam(required = false) String keyword,
            @RequestParam(required = false) String status)
    {
        List<ContactDTO> contactDTOs = contactService.getAllContacts(keyword, status);
        return ResponseEntity.ok(contactDTOs);
    }

    @PostMapping("contact")
    public ResponseEntity<?> addContact(@RequestBody ContactDTO contact) {
        contactService.addContact(contact);
        return ResponseEntity.ok(Map.of("message", "Gửi thành công"));
    }

    @PatchMapping("contacts/{id}/status")
    public ResponseEntity<?> updateStatus(@PathVariable("id") Integer id, @RequestBody UpdateContactStatusRequest req) {
        ContactDTO contactDTO = contactService.updateStatus(id, req);
        return ResponseEntity.ok(contactDTO);
    }

}
