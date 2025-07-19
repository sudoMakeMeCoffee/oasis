package com.oasis.service;

import com.oasis.dto.request.CreateChallengeRequestDto;
import com.oasis.dto.response.ChallengeResponseDto;
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
    public ChallengeResponseDto createChallenge(CreateChallengeRequestDto dto) {
        Challenge challenge = Challenge.builder()
                .title(dto.getTitle())
                .description(dto.getDescription())
                .difficulty(dto.getDifficulty())
                .input(dto.getInput())
                .output(dto.getOutput())
                .build();
        Challenge savedChallenge =  challengeRepository.save(challenge);

        return ChallengeResponseDto.fromEntity(savedChallenge);
    }

    @Override
    public ChallengeResponseDto getChallengeById(UUID id) {
        Challenge challenge = challengeRepository.findById(id)
                .orElseThrow(() ->
                        new EntityNotFoundException("Challenge not found with id: " + id));

        return  ChallengeResponseDto.fromEntity(challenge);
    }

    @Override
    public List<ChallengeResponseDto> getAllChallenges() {
        List<Challenge> challenges = challengeRepository.findAll();
        List<ChallengeResponseDto> dtoList = challenges.stream()
                .map(ChallengeResponseDto::fromEntity)
                .toList();

        return dtoList;
    }
}
