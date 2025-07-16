package com.oasis.service;

import com.oasis.dto.request.CreateChallengeRequestDto;
import com.oasis.entity.Challenge;
import com.oasis.repository.ChallengeRepository;
import jakarta.validation.Valid;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

@Service
public class ChallengeService {

    private final ChallengeRepository challengeRepository;

    public ChallengeService(ChallengeRepository challengeRepository) {
        this.challengeRepository = challengeRepository;
    }

    public Challenge createChallenge(CreateChallengeRequestDto requestDto){
        Challenge challenge = Challenge.builder()
                .title(requestDto.getTitle())
                .build();

        return challengeRepository.save(challenge);
    }


}
