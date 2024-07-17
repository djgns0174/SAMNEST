package com.example.samnest_back.controller;

import com.example.samnest_back.dto.UserDTO;
import com.example.samnest_back.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequiredArgsConstructor
@RequestMapping("/user")
public class UserController {

    private final UserService userService;

    @PostMapping("/register")
    public String register(@ModelAttribute UserDTO userDTO) {
        userService.save(userDTO);
        return "redirect:/user/login";
    }
}