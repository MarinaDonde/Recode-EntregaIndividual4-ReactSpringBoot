package com.agenciaviaje.agenciaviaje.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.agenciaviaje.agenciaviaje.entities.Cliente;

public interface ClienteRepository extends JpaRepository<Cliente, Long> {
	
	Cliente findByEmail(String email);

}
