package com.oasis.service;

import com.oasis.dto.request.CreateChallengeRequestDto;
import com.oasis.dto.response.ChallengeResponseDto;

import java.util.List;
import java.util.UUID;

public interface ChallengeService {
    ChallengeResponseDto createChallenge(CreateChallengeRequestDto dto);
    ChallengeResponseDto getChallengeById(UUID id);

    List<ChallengeResponseDto> getAllChallenges();
}
