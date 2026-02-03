package com.uniquiz.backend.service.impl;

import com.uniquiz.backend.converter.ContactConverter;
import com.uniquiz.backend.dto.contact.ContactDTO;
import com.uniquiz.backend.dto.contact.DashboardContactDTO;
import com.uniquiz.backend.dto.contact.UpdateContactStatusRequest;
import com.uniquiz.backend.entity.ContactEntity;
import com.uniquiz.backend.repository.ContactRepository;
import com.uniquiz.backend.service.ContactService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ContactServiceImpl implements ContactService {

    @Autowired
    private ContactRepository contactRepository;

    @Autowired
    private ContactConverter contactConverter;

    @Override
    public DashboardContactDTO getDashboardContact() {
        return new DashboardContactDTO(
            contactRepository.countTotal(),
            contactRepository.countPending(),
            contactRepository.countResolved(),
            contactRepository.countToday()
        );
    }

    @Override
    public Page<ContactDTO> getAllContacts(Integer page, Integer pageSize, String keyword, String status) {
        Pageable pageable =  PageRequest.of(page, pageSize);

        Page<ContactEntity> contactEntities = contactRepository.search(keyword, status, pageable);
        Page<ContactDTO> contactDTOs = contactEntities.map(c -> contactConverter.toDTO(c));
        return contactDTOs;
    }


    @Override
    public ContactDTO updateStatus(Integer id, UpdateContactStatusRequest req) {
        ContactEntity contactEntity = contactRepository.findById(id).get();
        contactEntity.setStatus(req.getStatus());
        contactRepository.save(contactEntity);

        return contactConverter.toDTO(contactEntity);
    }

    @Override
    public void addContact(ContactDTO contactDTO) {
        ContactEntity  contactEntity = contactConverter.toEntity(contactDTO);
        contactRepository.save(contactEntity);
    }


}
