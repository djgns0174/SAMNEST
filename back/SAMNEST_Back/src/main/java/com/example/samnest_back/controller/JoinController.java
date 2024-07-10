package com.example.samnest_back.controller;

import com.example.samnest_back.dto.JoinDTO;
import com.example.samnest_back.service.JoinService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class JoinController {

    @Autowired
    private JoinService joinService;


    @GetMapping("/join")
    public String joinP() {

        System.out.println("join");
        return "join";
    }


    @PostMapping("/joinProc")
    public String joinProcess(JoinDTO joinDTO) {

        joinService.joinProcess(joinDTO);

        return "redirect:/login";
    }
}