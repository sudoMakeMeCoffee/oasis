package com.oasis.dto.request;

import lombok.*;

import java.util.UUID;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ChallengeAttemptRequestDto {
    private UUID challengeId;
    private UUID userId;
}