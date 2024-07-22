package com.example.samnest_back.user.service;

import com.example.samnest_back.user.dto.UserDTO;
import com.example.samnest_back.user.entity.UserEntity;
import com.example.samnest_back.user.repository.UserRepository;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    private final UserRepository userRepository;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;

    public UserService(UserRepository userRepository) {

        this.userRepository = userRepository;

        this.bCryptPasswordEncoder = new BCryptPasswordEncoder();
    }

    public void save(UserDTO userDTO) {

        UserEntity userEntity = UserEntity.toUserEntity(userDTO);

        String encodedPassword = bCryptPasswordEncoder.encode(userEntity.getPassword());
        userEntity.setPassword(encodedPassword);

        userRepository.save(userEntity);
    }

    public boolean checkIdDuplicate(String username) {
        return userRepository.existsByUsername(username);
    }
}
