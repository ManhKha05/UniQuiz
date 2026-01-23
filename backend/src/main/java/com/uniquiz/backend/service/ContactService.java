package com.uniquiz.backend.service;

import com.uniquiz.backend.dto.contact.ContactRequest;

public interface ContactService {
    void addContact(ContactRequest contactRequest);
}
