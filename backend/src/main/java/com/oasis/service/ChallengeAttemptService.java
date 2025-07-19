package com.oasis.service;

import com.oasis.dto.request.ChallengeAttemptRequestDto;
import com.oasis.entity.ChallengeAttempt;
import org.springframework.stereotype.Service;

@Service
public interface ChallengeAttemptService {

    public ChallengeAttempt createChallengeAttempt(ChallengeAttemptRequestDto requestDto);
}
