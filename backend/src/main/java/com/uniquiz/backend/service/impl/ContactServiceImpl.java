package com.uniquiz.backend.service.impl;

import com.uniquiz.backend.converter.ContactConverter;
import com.uniquiz.backend.dto.contact.ContactRequest;
import com.uniquiz.backend.entity.ContactEntity;
import com.uniquiz.backend.repository.ContactRepository;
import com.uniquiz.backend.service.ContactService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ContactServiceImpl implements ContactService {

    @Autowired
    private ContactRepository contactRepository;

    @Autowired
    private ContactConverter contactConverter;

    @Override
    public void addContact(ContactRequest contactRequest) {
        ContactEntity  contactEntity = contactConverter.toEntity(contactRequest);
        contactRepository.save(contactEntity);
    }
}
