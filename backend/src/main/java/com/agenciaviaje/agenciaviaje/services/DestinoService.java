package com.agenciaviaje.agenciaviaje.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.agenciaviaje.agenciaviaje.dto.DestinoDTO;
import com.agenciaviaje.agenciaviaje.entities.Destino;
import com.agenciaviaje.agenciaviaje.repositories.DestinoRepository;

@Service
public class DestinoService {
	
	@Autowired
	private DestinoRepository repository;

	@Transactional(readOnly = true)
	public Page<DestinoDTO> findAll(Pageable pageable) {
		Page<Destino> result = repository.findAll(pageable);
		Page<DestinoDTO> page = result.map(x -> new DestinoDTO(x));
		return page;
	}
	

	@Transactional()
	public DestinoDTO findById(Long id) {
		Destino result = repository.findById(id).get();
		DestinoDTO dto = new DestinoDTO(result);
		return dto;
	}
	
}
