package com.oasis.dto.request;


import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.Setter;

import java.util.UUID;

@Getter
@Setter
public class CreateAlgoChallengeRequestDto {
    @NotBlank(message = "Title cannot be empty.")
    private String title;

    @NotBlank(message = "Description cannot be empty.")
    private String description;
    private UUID mainChallengeId;

    @NotBlank(message = "Flag cannot be empty.")
    private String flag;

}
