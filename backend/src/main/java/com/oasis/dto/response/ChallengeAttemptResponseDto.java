package com.oasis.dto.response;

import com.oasis.entity.ChallengeAttempt;
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
    private long attempts;
    private long points;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;

    public static ChallengeAttemptResponseDto fromEntity(ChallengeAttempt entity) {
        return ChallengeAttemptResponseDto.builder()
                .id(entity.getId())
                .challengeId(entity.getChallenge().getId())
                .userId(entity.getUser().getId())
                .attempts(entity.getAttempts())
                .points(entity.getPoints())
                .createdAt(entity.getCreatedAt())
                .updatedAt(entity.getUpdatedAt())
                .build();
    }
}