package com.oasis.service;

import com.oasis.dto.request.CreateAlgoChallengeRequestDto;
import com.oasis.dto.request.CreateChallengeRequestDto;
import com.oasis.dto.response.AlgoChallengeResponseDto;
import com.oasis.entity.AlgoChallenge;
import com.oasis.entity.Challenge;
import com.oasis.repository.AlgoChallengeRepository;
import com.oasis.repository.ChallengeRepository;
import org.springframework.stereotype.Service;

@Service
public class AlgoChallengeService {
    private final AlgoChallengeRepository algoChallengeRepository;
    private final ChallengeRepository challengeRepository;


    public AlgoChallengeService(AlgoChallengeRepository algoChallengeRepository, ChallengeRepository challengeRepository) {
        this.algoChallengeRepository = algoChallengeRepository;
        this.challengeRepository = challengeRepository;
    }

    public AlgoChallengeResponseDto createAlgoChallenge(CreateAlgoChallengeRequestDto requestDto){

        Challenge challenge = challengeRepository.findById(requestDto.getMainChallengeId()).orElse(null);

        AlgoChallenge algoChallenge = AlgoChallenge.builder()
                .title(requestDto.getTitle())
                .description(requestDto.getDescription())
                .challenge(challenge)
                .flag(requestDto.getFlag())
                .build();

        AlgoChallenge createdChallenge =  algoChallengeRepository.save(algoChallenge);

        return AlgoChallengeResponseDto.fromEntity(createdChallenge);
    }
}
