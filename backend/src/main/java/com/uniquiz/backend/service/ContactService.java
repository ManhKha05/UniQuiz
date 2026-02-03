package com.uniquiz.backend.service;

import com.uniquiz.backend.dto.contact.ContactDTO;
import com.uniquiz.backend.dto.contact.DashboardContactDTO;
import com.uniquiz.backend.dto.contact.UpdateContactStatusRequest;
import org.springframework.data.domain.Page;

import java.util.List;

public interface ContactService {
    void addContact(ContactDTO contactDTO);
    DashboardContactDTO getDashboardContact();
    Page<ContactDTO> getAllContacts(Integer page, Integer pageSize, String keyword, String status);
    ContactDTO updateStatus(Integer id, UpdateContactStatusRequest req);

}
