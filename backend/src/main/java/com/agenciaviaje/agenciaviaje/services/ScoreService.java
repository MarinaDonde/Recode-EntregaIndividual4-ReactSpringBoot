package com.agenciaviaje.agenciaviaje.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.agenciaviaje.agenciaviaje.dto.DestinoDTO;
import com.agenciaviaje.agenciaviaje.dto.ScoreDTO;
import com.agenciaviaje.agenciaviaje.entities.Cliente;
import com.agenciaviaje.agenciaviaje.entities.Destino;
import com.agenciaviaje.agenciaviaje.entities.Score;
import com.agenciaviaje.agenciaviaje.repositories.ClienteRepository;
import com.agenciaviaje.agenciaviaje.repositories.DestinoRepository;
import com.agenciaviaje.agenciaviaje.repositories.ScoreRepository;

@Service
public class ScoreService {

	@Autowired
	private DestinoRepository destinoRepository;
	
	@Autowired
	private ClienteRepository clienteRepository;
	
	@Autowired
	private ScoreRepository scoreRepository;
	
	@Transactional
	public DestinoDTO saveScore(ScoreDTO dto) {
		
		Cliente cliente = clienteRepository.findByEmail(dto.getEmail());
		if (cliente == null) {
			cliente = new Cliente();
			cliente.setEmail(dto.getEmail());
			cliente = clienteRepository.saveAndFlush(cliente);
		}
		
		Destino destino = destinoRepository.findById(dto.getDestinoId()).get();
		
		Score score = new Score();
		score.setDestino(destino);
		score.setCliente(cliente);
		score.setValue(dto.getScore());
		
		score = scoreRepository.saveAndFlush(score);
		
		double sum = 0.0;
		
		for(Score s : destino.getScores()) {
			sum = sum + s.getValue();
		}
		
		double avg = sum / destino.getScores().size();
		
		destino.setScore(avg);
		destino.setCount(destino.getScores().size());
		
		destino = destinoRepository.save(destino);
		
		return new DestinoDTO(destino);
	}
}