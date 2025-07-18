package com.oasis.dto.request;

import com.oasis.enums.ChallengeDifficulty;
import com.oasis.enums.ChallengeStatus;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class CreateChallengeRequestDto {

    @NotBlank(message = "Title is required")
    @Size(max = 255, message = "Title cannot exceed 255 characters")
    private String title;

    @NotBlank(message = "Description is required")
    private String description;

    @NotNull(message = "Status must be provided")
    private ChallengeStatus status;

    @NotNull(message = "Difficulty must be provided")
    private ChallengeDifficulty difficulty;

    @NotBlank(message = "Input is required")
    private String input;

    @NotBlank(message = "Output is required")
    private String output;
}
