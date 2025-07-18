package com.oasis.controller;

import com.oasis.dto.request.CreateChallengeRequestDto;
import com.oasis.dto.response.ChallengeResponseDto;
import com.oasis.dto.response.common.ApiResponse;
import com.oasis.entity.Challenge;
import com.oasis.service.ChallengeService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/v1/challenge")
@RequiredArgsConstructor
public class ChallengeController {

    private final ChallengeService challengeService;

    @PostMapping
    public ResponseEntity<ApiResponse<ChallengeResponseDto>> createChallenge(
            @Valid @RequestBody CreateChallengeRequestDto dto) {
        Challenge saved = challengeService.createChallenge(dto);
        ChallengeResponseDto response = ChallengeResponseDto.fromEntity(saved);
        return ResponseEntity.ok(
                new ApiResponse<>(true, "Challenge created successfully", response)
        );
    }

    @GetMapping
    public ResponseEntity<ApiResponse<List<ChallengeResponseDto>>> getAllChallenges() {
        List<Challenge> list = challengeService.getAllChallenges();
        List<ChallengeResponseDto> dtoList = list.stream()
                .map(ChallengeResponseDto::fromEntity)
                .toList();
        return ResponseEntity.ok(
                new ApiResponse<>(true, "Challenges fetched successfully", dtoList)
        );
    }

    @GetMapping("/{id}")
    public ResponseEntity<ApiResponse<ChallengeResponseDto>> getChallengeById(
            @PathVariable UUID id) {
        Challenge found = challengeService.getChallengeById(id);
        ChallengeResponseDto response = ChallengeResponseDto.fromEntity(found);
        return ResponseEntity.ok(
                new ApiResponse<>(true, "Challenge fetched successfully", response)
        );
    }
}
