package com.app.pojos;

import javax.persistence.*;
import javax.validation.constraints.*;

import java.util.HashSet;
import java.util.Set;

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

    @Column(name = "address")
    @NotBlank(message = "Address is required")
    @Size(max = 100, message = "Address must be less than 100 characters")
    private String address;

    @Column(name = "number_of_flats")
    @Min(value = 1, message = "Number of flats must be greater than or equal to 1")
    private int numberOfFlats;

    @OneToOne
    @JoinColumn(name = "user_id", referencedColumnName = "id")
    private User user;

    @OneToMany(mappedBy = "building", cascade = CascadeType.ALL)
    private Set<Flat> flats = new HashSet<>();

	public Building() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Building(
			@NotBlank(message = "Name is required") @Size(max = 50, message = "Name must be less than 50 characters") String name,
			@NotBlank(message = "Address is required") @Size(max = 100, message = "Address must be less than 100 characters") String address,
			@Min(value = 1, message = "Number of flats must be greater than or equal to 1") int numberOfFlats) {
		super();
		this.name = name;
		this.address = address;
		this.numberOfFlats = numberOfFlats;
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

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
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

	public void setFlats(Set<Flat> flats) {
		this.flats = flats;
	}

	@Override
	public String toString() {
		return "Building [id=" + id + ", name=" + name + ", address=" + address + ", numberOfFlats=" + numberOfFlats
				+ ", user=" + user + "]";
	}

    // Constructors, getters, setters, and equals()/hashCode()
    
    
    
    
}
