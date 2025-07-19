package com.oasis.controller;

import com.oasis.dto.request.ChallengeAttemptRequestDto;
import com.oasis.dto.response.ChallengeAttemptResponseDto;
import com.oasis.entity.ChallengeAttempt;
import com.oasis.service.ChallengeAttemptService;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/api/v1/challenge-attempts")
@Validated
public class ChallengeAttemptController {


    private final ChallengeAttemptService challengeAttemptService;

    public ChallengeAttemptController(ChallengeAttemptService challengeAttemptService) {
        this.challengeAttemptService = challengeAttemptService;
    }

    @PostMapping
    public ChallengeAttempt createChallengeAttempt(@RequestBody ChallengeAttemptRequestDto requestDto) {
        return challengeAttemptService.createChallengeAttempt(requestDto);
    }
}