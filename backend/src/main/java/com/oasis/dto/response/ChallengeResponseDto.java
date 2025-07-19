package com.oasis.dto.response;

import com.oasis.entity.Challenge;
import com.oasis.enums.ChallengeDifficulty;
import com.oasis.enums.ChallengeStatus;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.UUID;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ChallengeResponseDto {
    private UUID id;
    private String title;
    private String description;
    private ChallengeStatus status;
    private ChallengeDifficulty difficulty;
    private String input;
    private String output;

    /**
     * Map a Challenge entity to its Response DTO.
     */
    public static ChallengeResponseDto fromEntity(Challenge entity) {
        if (entity == null) {
            return null;
        }
        return ChallengeResponseDto.builder()
                .id(entity.getId())
                .title(entity.getTitle())
                .description(entity.getDescription())
                .difficulty(entity.getDifficulty())
                .input(entity.getInput())
                .output(entity.getOutput())
                .build();
    }
}
