package com.example.samnest_back.service;

import com.example.samnest_back.dto.JoinDTO;
import com.example.samnest_back.entity.UserEntity;
import com.example.samnest_back.repository.UserRepository;
import org.apache.catalina.Store;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;



@Service
public class JoinService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    public void joinProcess(JoinDTO joinDTO){
        UserEntity userEntity = new UserEntity();

        //DB에 동일한 회원인 경우
        boolean isUser = userRepository.existsByUsername(joinDTO.getUsername());
        if(isUser) { return; }

        userEntity.setUsername(joinDTO.getUsername());
        userEntity.setPassword(bCryptPasswordEncoder.encode(joinDTO.getPassword()));
        userEntity.setRole("ROLE_USER");

        userRepository.save(userEntity);
    }
}
