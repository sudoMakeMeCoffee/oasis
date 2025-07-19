package com.oasis.dto.response;

import lombok.*;

import java.time.LocalDateTime;
import java.util.UUID;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ChallengeAttemptResponseDto {
    private UUID id;
    private UUID challengeId;
    private UUID userId;
    private long points;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;

    public static ChallengeAttemptResponseDto fromEntity(com.oasis.entity.ChallengeAttempt entity) {
        return ChallengeAttemptResponseDto.builder()
                .id(entity.getId())
                .challengeId(entity.getChallenge().getId())
                .userId(entity.getUser().getId())
                .points(entity.getPoints())
                .createdAt(entity.getCreatedAt())
                .updatedAt(entity.getUpdatedAt())
                .build();
    }
}