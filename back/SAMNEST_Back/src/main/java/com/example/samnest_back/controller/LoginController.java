package com.example.samnest_back.controller;

import com.example.samnest_back.dto.JoinDTO;
import com.example.samnest_back.service.LoginService;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@Controller
@RequiredArgsConstructor
public class LoginController {

    private final Logger log = LoggerFactory.getLogger(getClass());

    private final LoginService loginService;

    @GetMapping("/login")
    public String login() {
        return "login";
    }

    @PostMapping("/loginProcess")
    public String loginProcess(@RequestBody JoinDTO joinDTO){
        String username = joinDTO.getUsername();
        String password = joinDTO.getPassword();

        log.info("hello world");//test

        //console.log 해결해야되고 login 마저 해야됨(로그인 지금 안됨)
        if(loginService.authenticateUser(username, password)){
            return "redirect:/main";
        }else{
            return "login";
        }
    }
}
