package com.oasis.dto.request;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CreateTeamRequestDto {
    @NotBlank(message = "Team name is required")
    private String name;
}
