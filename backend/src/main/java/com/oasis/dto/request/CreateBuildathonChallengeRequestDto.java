package com.oasis.dto.request;


import lombok.Getter;
import lombok.Setter;

import java.util.UUID;

@Getter
@Setter
public class CreateBuildathonChallengeRequestDto {
    private String title;
    private String description;
    private UUID mainChallengeId;
}
