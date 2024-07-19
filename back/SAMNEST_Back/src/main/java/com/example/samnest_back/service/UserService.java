package com.example.samnest_back.service;

import com.example.samnest_back.dto.UserDTO;
import com.example.samnest_back.entity.UserEntity;
import com.example.samnest_back.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public void save(UserDTO userDTO) {
        UserEntity userEntity = UserEntity.toMemberEntity(userDTO);
        userRepository.save(userEntity);
    }

    public boolean checkIdDuplicate(String username) {
        return userRepository.existsByUsername(username);
    }
}
