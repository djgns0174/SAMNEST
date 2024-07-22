package com.example.samnest_back.user.entity;

import com.example.samnest_back.user.dto.UserDTO;
import jakarta.persistence.*;

@Entity
public class UserEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(unique = true, nullable = false)
    private String username;

    @Column(nullable = false)
    private String password;

    @Column(nullable = false)
    private String gender;

    private boolean visually;
    private boolean deaf;
    private boolean physically;


    // Getter and Setter for username
    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    // Getter and Setter for password
    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    // Getter and Setter for gender
    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    // Getter and Setter for visually
    public boolean isVisually() {
        return visually;
    }

    public void setVisually(boolean visually) {
        this.visually = visually;
    }

    // Getter and Setter for deaf
    public boolean isDeaf() {
        return deaf;
    }

    public void setDeaf(boolean deaf) {
        this.deaf = deaf;
    }

    // Getter and Setter for physically
    public boolean isPhysically() {
        return physically;
    }

    public void setPhysically(boolean physically) {
        this.physically = physically;
    }

    // Static method to convert UserDTO to UserEntity
    public static UserEntity toUserEntity(UserDTO userDTO) {
        UserEntity userEntity = new UserEntity();
        userEntity.setUsername(userDTO.getUsername());
        userEntity.setPassword(userDTO.getPassword());
        userEntity.setGender(userDTO.getGender());
        userEntity.setVisually(userDTO.isVisually());
        userEntity.setDeaf(userDTO.isDeaf());
        userEntity.setPhysically(userDTO.isPhysically());

        return userEntity;
    }
}
