package com.uniquiz.backend.controller.admin;

import com.uniquiz.backend.dto.contact.ContactDTO;
import com.uniquiz.backend.dto.contact.DashboardContactDTO;
import com.uniquiz.backend.dto.contact.UpdateContactStatusRequest;
import com.uniquiz.backend.service.ContactService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
public class ContactAdminController {

    @Autowired
    private ContactService contactService;

    @GetMapping("/admin/contacts/dashboard")
    public ResponseEntity<?> getDashboard() {
        DashboardContactDTO dashboard =  contactService.getDashboardContact();
        return ResponseEntity.ok(dashboard);
    }

    @GetMapping("/admin/contacts")
    public ResponseEntity<?> getAllContacts(
            @RequestParam(required = false) Integer page,
            @RequestParam(required = false) Integer pageSize,
            @RequestParam(required = false) String keyword,
            @RequestParam(required = false) String status)
    {
        Page<ContactDTO> contactDTOs = contactService.getAllContacts(page, pageSize, keyword, status);
        return ResponseEntity.ok(contactDTOs);
    }

    @PatchMapping("/admin/contacts/{id}/status")
    public ResponseEntity<?> updateStatus(@PathVariable("id") Integer id, @RequestBody UpdateContactStatusRequest req) {
        ContactDTO contactDTO = contactService.updateStatus(id, req);
        return ResponseEntity.ok(contactDTO);
    }
}
