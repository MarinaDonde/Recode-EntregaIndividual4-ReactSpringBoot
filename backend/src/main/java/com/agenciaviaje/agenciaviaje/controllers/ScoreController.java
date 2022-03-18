package com.agenciaviaje.agenciaviaje.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.agenciaviaje.agenciaviaje.dto.DestinoDTO;
import com.agenciaviaje.agenciaviaje.dto.ScoreDTO;
import com.agenciaviaje.agenciaviaje.services.ScoreService;

@RestController
@RequestMapping(value = "/scores")
public class ScoreController {
	
	@Autowired
	private ScoreService service;
	
	@PutMapping
	public DestinoDTO saveScore(@RequestBody ScoreDTO dto) {
		DestinoDTO destinoDTO = service.saveScore(dto);
		return destinoDTO;
	}
}
