package com.example.samnest_back.dto;

import com.example.samnest_back.entity.UserEntity;

public class UserDTO {
    private Long id;
    private String username;
    private String password;
    private String gender;
    private boolean visually;
    private boolean deaf;
    private boolean physically;

    // Default constructor
    public UserDTO() {
    }

    // Parameterized constructor
    public UserDTO(Long id, String username, String password, String gender, boolean visually, boolean deaf, boolean physically) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.gender = gender;
        this.visually = visually;
        this.deaf = deaf;
        this.physically = physically;
    }

    // Getter and Setter for id
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

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

    @Override
    public String toString() {
        return "UserDTO{" +
                "id=" + id +
                ", username='" + username + '\'' +
                ", password='" + password + '\'' +
                ", gender='" + gender + '\'' +
                ", visually=" + visually +
                ", deaf=" + deaf +
                ", physically=" + physically +
                '}';
    }

    // Static method to convert UserEntity to UserDTO
    public static UserDTO toUserDTO(UserEntity userEntity) {
        UserDTO userDTO = new UserDTO();
        userDTO.setUsername(userEntity.getUsername());
        userDTO.setPassword(userEntity.getPassword());
        userDTO.setGender(userEntity.getGender());
        userDTO.setVisually(userEntity.isVisually());
        userDTO.setDeaf(userEntity.isDeaf());
        userDTO.setPhysically(userEntity.isPhysically());

        return userDTO;
    }
}
