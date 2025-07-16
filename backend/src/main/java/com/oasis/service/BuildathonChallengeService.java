package com.oasis.service;

import com.oasis.dto.request.CreateAlgoChallengeRequestDto;
import com.oasis.dto.request.CreateBuildathonChallengeRequestDto;
import com.oasis.dto.response.BuildathonChallengeResponseDto;
import com.oasis.entity.AlgoChallenge;
import com.oasis.entity.BuildathonChallenge;
import com.oasis.entity.Challenge;
import com.oasis.repository.BuildathonChallengeRepository;
import com.oasis.repository.ChallengeRepository;
import org.springframework.stereotype.Service;

@Service
public class BuildathonChallengeService {
    private final BuildathonChallengeRepository buildathonChallengeRepository;
    private final ChallengeRepository challengeRepository;


    public BuildathonChallengeService(BuildathonChallengeRepository buildathonChallengeRepository, ChallengeRepository challengeRepository) {
        this.buildathonChallengeRepository = buildathonChallengeRepository;
        this.challengeRepository = challengeRepository;
    }


    public BuildathonChallengeResponseDto createBuildathonChallenge(CreateBuildathonChallengeRequestDto requestDto){
        Challenge challenge = challengeRepository.findById(requestDto.getMainChallengeId()).orElse(null);
        BuildathonChallenge bulChallenge = BuildathonChallenge.builder()
                .title(requestDto.getTitle())
                .description(requestDto.getDescription())
                .challenge(challenge)
                .build();

        BuildathonChallenge createdChallnge = buildathonChallengeRepository.save(bulChallenge);

        return BuildathonChallengeResponseDto.fromEntity(bulChallenge);
    }
}
