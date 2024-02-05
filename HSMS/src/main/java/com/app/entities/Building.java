package com.app.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table
public class Building {

	@Id
	private Long id;
	
	@Column
	private String name;
	
	@Column
	private Long addressId;
	
	@Column
	private Long numberOfFlats;
	
	@Column
	private Long secId;

	public Building() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Building(Long id, String name, Long addressId, Long numberOfFlats, Long secId) {
		super();
		this.id = id;
		this.name = name;
		this.addressId = addressId;
		this.numberOfFlats = numberOfFlats;
		this.secId = secId;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Long getAddressId() {
		return addressId;
	}

	public void setAddressId(Long addressId) {
		this.addressId = addressId;
	}

	public Long getNumberOfFlats() {
		return numberOfFlats;
	}

	public void setNumberOfFlats(Long numberOfFlats) {
		this.numberOfFlats = numberOfFlats;
	}

	public Long getSecId() {
		return secId;
	}

	public void setSecId(Long secId) {
		this.secId = secId;
	}

	@Override
	public String toString() {
		return "Building [id=" + id + ", name=" + name + ", addressId=" + addressId + ", numberOfFlats=" + numberOfFlats
				+ ", secId=" + secId + "]";
	}
	
	
	
}
