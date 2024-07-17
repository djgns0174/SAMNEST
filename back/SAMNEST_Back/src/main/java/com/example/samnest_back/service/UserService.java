package com.example.samnest_back.service;

import com.example.samnest_back.dto.UserDTO;
import com.example.samnest_back.entity.UserEntity;
import com.example.samnest_back.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;

    public void save(UserDTO userDTO) {
        UserEntity userEntity = UserEntity.toMemberEntity(userDTO);
        userRepository.save(userEntity);
    }
}
