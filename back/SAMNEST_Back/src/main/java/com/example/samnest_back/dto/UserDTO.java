package com.example.samnest_back.dto;

import com.example.samnest_back.entity.UserEntity;
import jakarta.persistence.Column;
import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@ToString
@Getter
@Setter
public class UserDTO {
    private Long id;
    private String username;
    private String password;
    private String gender;
    private boolean visually;
    private boolean deaf;
    private boolean physically;

    public String getPassword() {
        return password;
    }
    public void setPassword(String password) {
        this.password = password;
    }

    public String getUsername() {
        return username;
    }
    public void setUsername(String username) {
        this.username = username;
    }

    public String getGender(){return gender;}
    public void setGender(String gender){this.gender = gender;}

    public static UserDTO toUserDTO(UserEntity userEntity) {
        UserDTO userDTO = new UserDTO();
        userDTO.setPassword(userEntity.getPassword());
        userDTO.setUsername(userEntity.getUsername());
        return userDTO;
    }
}
