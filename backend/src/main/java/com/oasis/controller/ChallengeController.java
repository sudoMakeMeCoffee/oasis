package com.oasis.controller;

import com.oasis.dto.request.CreateAlgoChallengeRequestDto;
import com.oasis.dto.request.CreateBuildathonChallengeRequestDto;
import com.oasis.dto.request.CreateChallengeRequestDto;
import com.oasis.dto.response.AlgoChallengeResponseDto;
import com.oasis.dto.response.BuildathonChallengeResponseDto;
import com.oasis.dto.response.ChallengeResponseDto;
import com.oasis.dto.response.TeamResponseDto;
import com.oasis.dto.response.common.ApiResponse;
import com.oasis.entity.AlgoChallenge;
import com.oasis.entity.BuildathonChallenge;
import com.oasis.entity.Challenge;
import com.oasis.repository.ChallengeRepository;
import com.oasis.service.AlgoChallengeService;
import com.oasis.service.BuildathonChallengeService;
import com.oasis.service.ChallengeService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/v1/challenge")
public class ChallengeController {

    private final ChallengeService challengeService;
    private final AlgoChallengeService algoChallengeService;
    private final BuildathonChallengeService buildathonChallengeService;

    public ChallengeController(ChallengeService challengeService, AlgoChallengeService algoChallengeService, BuildathonChallengeService buildathonChallengeService) {
        this.challengeService = challengeService;
        this.algoChallengeService = algoChallengeService;
        this.buildathonChallengeService = buildathonChallengeService;
    }

    @GetMapping
    public ResponseEntity<ApiResponse> getAllChallenges() {
        List<Challenge> challenges = challengeService.getAllChallenges();

        ApiResponse<List> response = new ApiResponse<>(
                true,
                "Challenge created Successfully.",
                challenges.stream().map(this::mapToDto).collect(Collectors.toList())
        );

        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }

    private ChallengeResponseDto mapToDto(Challenge challenge) {
        return ChallengeResponseDto.builder()
                .id(challenge.getId())
                .title(challenge.getTitle())
                .build();
    }

    @PostMapping
    public ResponseEntity<ApiResponse<Object>> createChallenge(@Valid @RequestBody CreateChallengeRequestDto requestDto){
        Challenge challenge = challengeService.createChallenge(requestDto);

        ApiResponse<Object> response = new ApiResponse<>(
                true,
                "Challenge created Successfully.",
                challenge
        );

        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }

    @PostMapping("/algo")
    public ResponseEntity<ApiResponse<Object>> createAlgoChallenge(@Valid @RequestBody CreateAlgoChallengeRequestDto requestDto){
        AlgoChallengeResponseDto challenge = algoChallengeService.createAlgoChallenge(requestDto);

        ApiResponse<Object> response = new ApiResponse<>(
                true,
                "Algo Challenge created Successfully.",
                challenge
        );

        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }


    @PostMapping("/build")
    public ResponseEntity<ApiResponse<Object>> createAlgoChallenge(@Valid @RequestBody CreateBuildathonChallengeRequestDto requestDto){
        BuildathonChallengeResponseDto challenge = buildathonChallengeService.createBuildathonChallenge(requestDto);

        ApiResponse<Object> response = new ApiResponse<>(
                true,
                "Buildathon challenge created Successfully.",
                challenge
        );

        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }


}


