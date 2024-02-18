package com.app.pojos;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Entity
@Table(name = "buildings")
public class Building {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column(name = "name")
	@NotBlank(message = "Name is required")
	@Size(max = 50, message = "Name must be less than 50 characters")
	private String name;

	@Column(name = "number_of_flats")
	@Min(value = 1, message = "Number of flats must be greater than or equal to 1")
	private int numberOfFlats;

	@Column(name = "line_1")
	@NotBlank(message = "required")
	@Size(max = 50, message = "must be less than 50 characters")
	String line_1;

	@Column(name = "line_2")
	@NotBlank(message = "required")
	@Size(max = 50, message = "must be less than 50 characters")
	String line_2;

	@Column(name = "city")
	@NotBlank(message = "required")
	@Size(max = 50, message = "must be less than 50 characters")
	String city;

	@Column(name = "PIN_Code")
	@NotBlank(message = "required")
	@Size(max = 6, min = 6, message = "must be 6 digits")
	String pinCode;

	@Column(name = "state")
	@NotBlank(message = "required")
	@Size(max = 50, message = "must be less than 50 characters")
	String state;

	@ManyToOne
	@JoinColumn(name = "user_secretary_id", referencedColumnName = "id")
	private User user;

	@OneToMany(mappedBy = "building", cascade = CascadeType.DETACH)
	private Set<Flat> flats = new HashSet<>();


	public Building() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Building(Long id,
			@NotBlank(message = "Name is required") @Size(max = 50, message = "Name must be less than 50 characters") String name,
			@Min(value = 1, message = "Number of flats must be greater than or equal to 1") int numberOfFlats,
			@NotBlank(message = "required") @Size(max = 50, message = "must be less than 50 characters") String line_1,
			@NotBlank(message = "required") @Size(max = 50, message = "must be less than 50 characters") String line_2,
			@NotBlank(message = "required") @Size(max = 50, message = "must be less than 50 characters") String city,
			@NotBlank(message = "required") @Size(max = 6, min = 6, message = "must be 6 digits") String pinCode,
			@NotBlank(message = "required") @Size(max = 50, message = "must be less than 50 characters") String state,
			User user, Set<Flat> flats) {
		super();
		this.id = id;
		this.name = name;
		this.numberOfFlats = numberOfFlats;
		this.line_1 = line_1;
		this.line_2 = line_2;
		this.city = city;
		this.pinCode = pinCode;
		this.state = state;
		this.user = user;
		this.flats = flats;
	}

	
	public Long getId() {
		return id;
	}

	/*
	 * public void setId(Long id) { this.id = id; }
	 */

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getNumberOfFlats() {
		return numberOfFlats;
	}

	public void setNumberOfFlats(int numberOfFlats) {
		this.numberOfFlats = numberOfFlats;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public Set<Flat> getFlats() {
		return flats;
	}

//	public void setFlats(Flat flat) {
//		flats.add(flat);
//	}

	public String getLine_1() {
		return line_1;
	}

	public void setFlats(Set<Flat> flats) {
		this.flats = flats;
	}

	public void setLine_1(String line_1) {
		this.line_1 = line_1;
	}

	public String getLine_2() {
		return line_2;
	}

	public void setLine_2(String line_2) {
		this.line_2 = line_2;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getPinCode() {
		return pinCode;
	}

	public void setPinCode(String pinCode) {
		this.pinCode = pinCode;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public void setId(Long id) {
		this.id = id;
	}

	@Override
	public String toString() {
		return "Building [id=" + id + ", name=" + name + ", numberOfFlats=" + numberOfFlats + ", line_1=" + line_1
				+ ", line_2=" + line_2 + ", city=" + city + ", pinCode=" + pinCode + ", state=" + state + "]";
	}

}
