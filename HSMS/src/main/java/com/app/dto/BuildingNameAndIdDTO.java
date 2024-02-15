package com.app.dto;

public class BuildingNameAndIdDTO 
{

	private String name;
	private Long id;
	@Override
	public String toString() {
		return "BuildingNameAndIdDTO [name=" + name + ", id=" + id + "]";
	}
	public BuildingNameAndIdDTO() {
		super();
		// TODO Auto-generated constructor stub
	}
	public BuildingNameAndIdDTO(String name, Long id) {
		super();
		this.name = name;
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
}
