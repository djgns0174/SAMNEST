package com.example.samnest_back.controller;

import com.example.samnest_back.dto.UserDTO;
import com.example.samnest_back.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/user")
public class UserController {

    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/register")
    public String register(){
        return "register";
    }

    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody UserDTO userDTO) {
        System.out.println("userdto"+ userDTO.toString());//test
        try {
            userService.save(userDTO);
            System.out.println("userDTO"+ userDTO.toString());
            return ResponseEntity.ok("회원가입이 완료되었습니다.");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("회원가입에 실패했습니다.");
        }
    }

    //id 중복확인
    @PostMapping("/checkIdDuplicate")
    public ResponseEntity<Boolean> checkIdDuplicate(@RequestBody Map<String, String>request) {
        String username = request.get("username");
        boolean isIdDuplicate = userService.checkIdDuplicate(username);
        return ResponseEntity.ok(isIdDuplicate);
    }

}
