package com.oasis.dto.response;

import com.oasis.entity.Challenge;
import lombok.Getter;
import lombok.Setter;

import java.util.UUID;

@Getter
@Setter
public class ChallengeResponseDto {

    private UUID id;
    private String title;

}
