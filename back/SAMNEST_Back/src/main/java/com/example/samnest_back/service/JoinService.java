package com.example.samnest_back.service;

import com.example.samnest_back.dto.JoinDTO;
import com.example.samnest_back.entity.UserEntity;
import com.example.samnest_back.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class JoinService {

    @Autowired
    private final UserRepository userRepository;

    @Autowired
    private final BCryptPasswordEncoder bCryptPasswordEncoder;


    public void joinProcess(JoinDTO joinDTO) {

        boolean isUser = userRepository.existsByUsername(joinDTO.getUsername());
        if(isUser){return;}

        UserEntity data = new UserEntity();

        data.setUsername(joinDTO.getUsername());
        data.setPassword(bCryptPasswordEncoder.encode(joinDTO.getPassword()));
        //data.setUsername(joinDTO.getGender());
        //data.setUsername(joinDTO.getDisablity());
        //data.setRole("ROLE_USER");

        userRepository.save(data);
    }
}