package com.agenciaviaje.agenciaviaje.dto;

import com.agenciaviaje.agenciaviaje.entities.Destino;

public class DestinoDTO {
	
	private Long id;
	private String cidade;
	private String imagem;
	private Double score;
	private Integer count;
	
	public DestinoDTO() {
		
	}
	
	public DestinoDTO(Long id, String cidade, String imagem, Double score, Integer count) {
		super();
		this.id = id;
		this.cidade = cidade;
		this.imagem = imagem;
		this.score = score;
		this.count = count;
	}

	public DestinoDTO(Destino destino) {
		id = destino.getId();
		cidade = destino.getCidade();
		imagem = destino.getImagem();
		score = destino.getScore();
		count = destino.getCount();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getCidade() {
		return cidade;
	}

	public void setCidade(String cidade) {
		this.cidade = cidade;
	}


	public String getImagem() {
		return imagem;
	}

	public void setImagem(String imagem) {
		this.imagem = imagem;
	}


	public Double getScore() {
		return score;
	}


	public void setScore(Double score) {
		this.score = score;
	}


	public Integer getCount() {
		return count;
	}


	public void setCount(Integer count) {
		this.count = count;
	}
	
}
