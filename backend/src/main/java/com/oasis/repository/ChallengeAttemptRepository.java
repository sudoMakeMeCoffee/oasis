package com.oasis.repository;

import com.oasis.entity.ChallengeAttempt;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface ChallengeAttemptRepository extends JpaRepository<ChallengeAttempt, UUID> {
}
