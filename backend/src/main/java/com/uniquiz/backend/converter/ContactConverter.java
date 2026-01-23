package com.uniquiz.backend.converter;

import com.uniquiz.backend.dto.contact.ContactRequest;
import com.uniquiz.backend.entity.ContactEntity;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class ContactConverter {

    @Autowired
    private ModelMapper modelMapper;

    public ContactEntity toEntity(ContactRequest contactRequest) {
        return modelMapper.map(contactRequest, ContactEntity.class);
    }
}
