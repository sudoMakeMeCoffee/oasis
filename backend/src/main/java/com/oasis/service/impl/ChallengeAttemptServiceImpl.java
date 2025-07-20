package com.oasis.service.impl;

import com.oasis.dto.request.ChallengeAttemptRequestDto;
import com.oasis.entity.Challenge;
import com.oasis.entity.ChallengeAttempt;
import com.oasis.entity.User;
import com.oasis.repository.ChallengeAttemptRepository;
import com.oasis.repository.ChallengeRepository;
import com.oasis.repository.UserRepository;
import com.oasis.service.ChallengeAttemptService;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public class ChallengeAttemptServiceImpl implements ChallengeAttemptService {

    private final ChallengeAttemptRepository challengeAttemptRepository;
    private final UserRepository userRepository;
    private final ChallengeRepository challengeRepository;

    public ChallengeAttemptServiceImpl(ChallengeAttemptRepository challengeAttemptRepository, UserRepository userRepository, ChallengeRepository challengeRepository) {
        this.challengeAttemptRepository = challengeAttemptRepository;
        this.userRepository = userRepository;
        this.challengeRepository = challengeRepository;
    }


    @Override
    public ChallengeAttempt createChallengeAttempt(ChallengeAttemptRequestDto requestDto) {

        User user = userRepository.findById(requestDto.getUserId()).orElseThrow(() -> new UsernameNotFoundException("User not found"));
        Challenge challenge = challengeRepository.findById(requestDto.getChallengeId()).orElseThrow(() -> new EntityNotFoundException("Challenge not found"));
        ChallengeAttempt attempt = ChallengeAttempt.builder()
                .challenge(challenge)
                .user(user)
                .build();
        return challengeAttemptRepository.save(attempt);
    }

    public ChallengeAttempt runCode(UUID userId, UUID challengeId) {
        ChallengeAttempt attempt = getOrCreateChallengeAttempt(userId, challengeId);
        attempt.setAttempts(attempt.getAttempts() + 1);
        challengeAttemptRepository.save(attempt);
        return attempt;
    }

    private ChallengeAttempt getOrCreateChallengeAttempt(UUID userId, UUID challengeId) {
        return challengeAttemptRepository.findByUserIdAndChallengeId(userId, challengeId)
                .orElse(ChallengeAttempt.builder()
                        .user(userRepository.getReferenceById(userId))
                        .challenge(challengeRepository.getReferenceById(challengeId))
                        .attempts(0)
                        .points(0)
                        .solved(false)
                        .build());
    }

}