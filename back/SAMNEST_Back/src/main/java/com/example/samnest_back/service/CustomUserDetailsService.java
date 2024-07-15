//package com.example.samnest_back.service;
//
//import com.example.samnest_back.dto.CustomUserDetails;
//import com.example.samnest_back.entity.UserEntity;
//import com.example.samnest_back.repository.UserRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.security.core.userdetails.UserDetailsService;
//import org.springframework.security.core.userdetails.UsernameNotFoundException;
//import org.springframework.stereotype.Service;
//
//@Service
//public class CustomUserDetailsService implements UserDetailsService {
//
//    @Autowired
//    private UserRepository userRepository;
//
//    @Override
//    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
//
//        UserEntity data = userRepository.findByUsername(username);
//        if(data != null) {
//            return new CustomUserDetails(data);
//        }
//        return null;
//    }
//}
