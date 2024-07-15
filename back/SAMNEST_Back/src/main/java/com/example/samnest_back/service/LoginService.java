package com.example.samnest_back.service;

import com.example.samnest_back.entity.UserEntity;
import com.example.samnest_back.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class LoginService {
    @Autowired
    private final UserRepository userRepository;

    @Autowired
    private final BCryptPasswordEncoder bCryptPasswordEncoder;

    public boolean authenticateUser(String username, String password) {
        System.out.println(username);//test
        UserEntity userEntity = userRepository.findByUsername(username);
        if (userEntity != null && bCryptPasswordEncoder.matches(password, userEntity.getPassword())) {  //해시알고리즘 디코드해서 비교
            return true;
        }
        return false;
    }
}
