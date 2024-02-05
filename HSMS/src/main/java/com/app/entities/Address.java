package com.app.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table
public class Address {

	@Id
	@GeneratedValue
	private Long Id;
	
	@Column
	private String city;
	
	@Column
	private String state;

	@Column
	private String pinCode;
	
	@Column 
	private String line1;
	
	@Column
	private String line2;

	public Address() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Address(Long id, String city, String state, String pinCode, String line1, String line2) {
		super();
		Id = id;
		this.city = city;
		this.state = state;
		this.pinCode = pinCode;
		this.line1 = line1;
		this.line2 = line2;
	}

	public Long getId() {
		return Id;
	}

	public void setId(Long id) {
		Id = id;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public String getPinCode() {
		return pinCode;
	}

	public void setPinCode(String pinCode) {
		this.pinCode = pinCode;
	}

	public String getLine1() {
		return line1;
	}

	public void setLine1(String line1) {
		this.line1 = line1;
	}

	public String getLine2() {
		return line2;
	}

	public void setLine2(String line2) {
		this.line2 = line2;
	}

}
