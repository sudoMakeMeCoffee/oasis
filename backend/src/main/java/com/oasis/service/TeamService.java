package com.oasis.service;

import com.oasis.dto.request.CreateTeamRequestDto;
import com.oasis.dto.response.TeamResponseDto;
import com.oasis.dto.response.UserResponseDto;
import com.oasis.entity.Team;
import com.oasis.entity.User;
import com.oasis.repository.TeamRepository;
import com.oasis.repository.UserRepository;
import com.oasis.utils.JwtUtil;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class TeamService {
    private final TeamRepository teamRepository;
    private final UserRepository userRepository;
    private final JwtUtil jwtUtil;

    public TeamService(TeamRepository teamRepository, UserRepository userRepository, JwtUtil jwtUtil) {
        this.teamRepository = teamRepository;
        this.userRepository = userRepository;
        this.jwtUtil = jwtUtil;
    }

    public Team createTeam(HttpServletRequest request, CreateTeamRequestDto requestDto){

        String email = jwtUtil.extractEmailFromCookie(request);

        User creator = userRepository.findByEmail(email).orElseThrow(() -> new UsernameNotFoundException("User not found"));

        Team newTeam = Team.builder()
                .name(requestDto.getName())
                .creator(creator)
                .build();

        return teamRepository.save(newTeam);
    }
}
