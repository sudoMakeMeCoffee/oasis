package com.oasis.dto.response;

import com.oasis.entity.User;
import com.oasis.enums.Role;
import lombok.*;

import java.util.UUID;

@Getter
@Setter
@Builder
public class UserResponseDto {

    private UUID id;
    private String username;
    private String email;
    private boolean isVerified;
    private Role role;

    public static UserResponseDto fromEntity(User user){
        return UserResponseDto.builder()
                .id(user.getId())
                .email(user.getEmail())
                .username(user.getUsername())
                .isVerified(user.isVerified())
                .role(user.getRole())
                .build();
    }

}
