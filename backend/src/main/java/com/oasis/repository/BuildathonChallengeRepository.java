package com.oasis.repository;

import com.oasis.entity.BuildathonChallenge;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface BuildathonChallengeRepository extends JpaRepository<BuildathonChallenge, UUID> {
}
