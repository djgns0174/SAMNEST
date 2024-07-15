package com.example.samnest_back.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "UserEntity") // 테이블 이름 확인
public class UserEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "username")
    private String username;

    @Column(name = "password")
    private String password;

//    @Column(name = "gender")
//    private String gender;
//
//    @Column(name = "disability")
//    private String disability;

    // 게터, 세터 및 기타 필요한 메서드
}
