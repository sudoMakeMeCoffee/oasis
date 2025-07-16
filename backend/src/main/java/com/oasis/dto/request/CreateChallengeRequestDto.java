package com.oasis.dto.request;

import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CreateChallengeRequestDto {

    @NotBlank(message = "Challenge title is required.")
    private String title;

}
