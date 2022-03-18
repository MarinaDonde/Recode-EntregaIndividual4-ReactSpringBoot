package com.agenciaviaje.agenciaviaje.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.agenciaviaje.agenciaviaje.dto.DestinoDTO;
import com.agenciaviaje.agenciaviaje.services.DestinoService;

@RestController
@RequestMapping(value = "/destinos")
public class DestinoController {
	
	@Autowired
	private DestinoService service;
	
	@GetMapping
	public Page<DestinoDTO> findAll(Pageable pageable) {
		return service.findAll(pageable);
	}
	
	@GetMapping(value = "/{id}")
	public DestinoDTO findById(@PathVariable Long id) {
		return service.findById(id);
	}

}

	

