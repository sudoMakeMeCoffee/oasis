package com.oasis.service;

import com.oasis.dto.request.CreateChallengeRequestDto;
import com.oasis.entity.Challenge;

import java.util.List;
import java.util.UUID;

public interface ChallengeService {
    Challenge createChallenge(CreateChallengeRequestDto dto);
    Challenge getChallengeById(UUID id);

    List<Challenge> getAllChallenges();
}
