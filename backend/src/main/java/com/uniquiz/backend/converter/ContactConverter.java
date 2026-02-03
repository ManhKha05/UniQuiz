package com.uniquiz.backend.converter;

import com.uniquiz.backend.dto.contact.ContactDTO;
import com.uniquiz.backend.entity.ContactEntity;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class ContactConverter {

    @Autowired
    private ModelMapper modelMapper;

    public ContactEntity toEntity(ContactDTO contactDTO) {
        return modelMapper.map(contactDTO, ContactEntity.class);
    }

    public ContactDTO toDTO(ContactEntity contactEntity) {
        return modelMapper.map(contactEntity, ContactDTO.class);
    }
}
