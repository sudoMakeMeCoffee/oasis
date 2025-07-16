package com.oasis.dto.response;

import com.oasis.entity.BuildathonChallenge;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.util.UUID;

@Getter
@Setter
@Builder
public class BuildathonChallengeResponseDto {
    private UUID id;
    private String title;
    private String description;
    private UUID mainChallengeID;

    public static BuildathonChallengeResponseDto fromEntity(BuildathonChallenge challenge){
        return BuildathonChallengeResponseDto.builder()
                .id(challenge.getId())
                .description(challenge.getDescription())
                .mainChallengeID(challenge.getChallenge().getId())
                .build();
    }

}
