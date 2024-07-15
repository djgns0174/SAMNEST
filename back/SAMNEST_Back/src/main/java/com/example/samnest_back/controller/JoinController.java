package com.example.samnest_back.controller;

import com.example.samnest_back.dto.JoinDTO;
import com.example.samnest_back.service.JoinService;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class JoinController {
    private final Logger log = LoggerFactory.getLogger(getClass());//내 클래스를 지정해줌

    @Autowired
    private final JoinService joinService;

    @GetMapping("/join")
    public String join() {

        return "join";
    }


    @PostMapping("/joinProcess")
    public String joinProcess(@RequestBody JoinDTO joinDTO) {
        log.info("hello world");//test

        joinService.joinProcess(joinDTO);

        return "redirect:/login";
    }
}