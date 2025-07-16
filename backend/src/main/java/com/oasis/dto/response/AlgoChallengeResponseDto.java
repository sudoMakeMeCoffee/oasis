package com.oasis.dto.response;

import com.oasis.entity.AlgoChallenge;
import com.oasis.entity.BuildathonChallenge;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.util.UUID;

@Getter
@Setter
@Builder
public class AlgoChallengeResponseDto {
    private UUID id;
    private String title;
    private String description;
    private UUID mainChallengeID;

    public static AlgoChallengeResponseDto fromEntity(AlgoChallenge challenge){
        return AlgoChallengeResponseDto.builder()
                .id(challenge.getId())
                .description(challenge.getDescription())
                .mainChallengeID(challenge.getChallenge().getId())
                .build();
    }

}
