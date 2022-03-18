package com.agenciaviaje.agenciaviaje.dto;

public class ScoreDTO {

	private Long destinoId;
	private String email;
	private Double score;
	
	public ScoreDTO() {
		
	}

	public Long getDestinoId() {
		return destinoId;
	}

	public void setDestinoId(Long destinoId) {
		this.destinoId = destinoId;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public Double getScore() {
		return score;
	}

	public void setScore(Double score) {
		this.score = score;
	}

}
