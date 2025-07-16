package com.oasis.controller;

import com.oasis.dto.request.CreateTeamRequestDto;
import com.oasis.dto.response.TeamResponseDto;
import com.oasis.dto.response.common.ApiResponse;
import com.oasis.entity.Team;
import com.oasis.repository.TeamRepository;
import com.oasis.service.TeamService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/team")
public class TeamController {

    private final TeamService teamService;

    public TeamController(TeamService teamService) {
        this.teamService = teamService;
    }



    @PostMapping
    public ResponseEntity<ApiResponse<Object>> createTeam(HttpServletRequest request, @Valid @RequestBody CreateTeamRequestDto requestDto){
        Team team = teamService.createTeam(request, requestDto);

        ApiResponse<Object> response = new ApiResponse<>(
                true,
                "Team created Successfully.",
                TeamResponseDto.fromEntity(team)
        );

        return new ResponseEntity<>(response, HttpStatus.CREATED);

    }




}
