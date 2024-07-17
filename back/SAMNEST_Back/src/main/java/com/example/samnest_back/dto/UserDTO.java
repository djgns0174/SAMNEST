package com.example.samnest_back.dto;

import com.example.samnest_back.entity.UserEntity;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class UserDTO {
    private Long id;
    private String username;
    private String user_password;

    public static UserDTO toUserDTO(UserEntity userEntity) {
        UserDTO userDTO = new UserDTO();
        userDTO.setUser_password(userEntity.getUser_password());
        userDTO.setUsername(userEntity.getUsername());
        return userDTO;
    }
}