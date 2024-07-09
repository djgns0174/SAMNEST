package com.example.samnest_back.controller;

import com.example.samnest_back.dto.JoinDTO;
import com.example.samnest_back.service.JoinService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class JoinController {

    private JoinService joinService;

    @GetMapping("/join")
    public String join() {
        return "join";
    }

    @GetMapping("/joinProc")
    public String joinProc(JoinDTO joinDto) {
        joinService.joinProcess(joinDto);
        return "redirect:/login";
    }
}
