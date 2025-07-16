package com.oasis.dto.response;

import com.oasis.entity.Team;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.util.UUID;

@Getter
@Setter
@Builder
public class TeamResponseDto {
    private UUID id;
    private String name;
    private UserResponseDto creator;

    public static TeamResponseDto fromEntity(Team team){
        return TeamResponseDto.builder()
                .id(team.getId())
                .name(team.getName())
                .creator(UserResponseDto.fromEntity(team.getCreator()))
                .build();
    }
}
