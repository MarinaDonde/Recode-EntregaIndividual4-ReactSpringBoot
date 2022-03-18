package com.agenciaviaje.agenciaviaje.entities;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table
public class Score {
	
	@EmbeddedId
	private ScorePK id = new ScorePK();
	
	private Double value;
	
	public Score() {
		
	}
	
	public void setDestino(Destino destino) {
		id.setDestino(destino);
	}
	
	public void setCliente(Cliente cliente) {
		id.setCliente(cliente);
	}

	public ScorePK getId() {
		return id;
	}

	public void setId(ScorePK id) {
		this.id = id;
	}

	public Double getValue() {
		return value;
	}

	public void setValue(Double value) {
		this.value = value;
	}

}