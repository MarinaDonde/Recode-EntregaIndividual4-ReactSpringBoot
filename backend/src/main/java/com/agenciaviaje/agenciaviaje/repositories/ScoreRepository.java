package com.agenciaviaje.agenciaviaje.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.agenciaviaje.agenciaviaje.entities.Score;
import com.agenciaviaje.agenciaviaje.entities.ScorePK;

public interface ScoreRepository extends JpaRepository<Score, ScorePK> {

}
