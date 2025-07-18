package com.oasis.service;

import com.oasis.dto.request.CreateChallengeRequestDto;
import com.oasis.entity.Challenge;
import com.oasis.repository.ChallengeRepository;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class ChallengeServiceImpl implements ChallengeService {

    private final ChallengeRepository challengeRepository;

    @Override
    public Challenge createChallenge(CreateChallengeRequestDto dto) {
        Challenge challenge = Challenge.builder()
                .title(dto.getTitle())
                .description(dto.getDescription())
                .status(dto.getStatus())
                .difficulty(dto.getDifficulty())
                .input(dto.getInput())
                .output(dto.getOutput())
                .build();
        return challengeRepository.save(challenge);
    }

    @Override
    public Challenge getChallengeById(UUID id) {
        return challengeRepository.findById(id)
                .orElseThrow(() ->
                        new EntityNotFoundException("Challenge not found with id: " + id));
    }

    @Override
    public List<Challenge> getAllChallenges() {
        return challengeRepository.findAll();
    }
}
