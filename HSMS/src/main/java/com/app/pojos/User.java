package com.app.pojos;

import javax.persistence.*;
import javax.validation.constraints.Digits;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "users")
public class User {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column(name = "name")
	@NotBlank(message = "Name is required")
	@Size(max = 50, message = "Name must be less than 50 characters")
	private String name;

	@Column(name = "email", unique = true)
	@NotBlank(message = "Email is required")
	@Email(message = "Email must be valid")
	private String email;

	@Column(length = 300, nullable = false)
	private String password;

    @Column(name = "role")
    @Enumerated(EnumType.STRING)
    private Role role;
    
    @Column(length = 10, nullable = false)
	private long contact;

    @OneToMany(mappedBy = "user",cascade = CascadeType.DETACH)
    private Set<Building> buildings;

	@OneToOne(mappedBy = "user", cascade = CascadeType.DETACH)
	private Building building;

	@OneToMany(mappedBy = "user", cascade = CascadeType.DETACH)
	private Set<Flat> flats = new HashSet<>();

	public long getContact() {
		return contact;
	}



	public User(
			@NotBlank(message = "Name is required") @Size(max = 50, message = "Name must be less than 50 characters") String name,
			@NotBlank(message = "Email is required") @Email(message = "Email must be valid") String email,
			@NotBlank(message = "Password is required") @Size(min = 8, max = 20, message = "Password must be between 8 and 20 characters") String password,
			Role role, long contact) {
		super();
		this.name = name;
		this.email = email;
		this.password = password;
		this.role = role;
		this.contact = contact;
	}



	public void setContact(long contact) {
		this.contact = contact;
	}



	public User() {
		super();
		// TODO Auto-generated constructor stub
	}

	

	public Long getContact() {
		return contact;
	}

	public void setContact(Long contact) {
		this.contact = contact;
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

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public Role getRole() {
		return role;
	}

	public void setRole(Role role) {
		this.role = role;
	}

	public Set<Building> getBuilding() {
		return buildings;
	}

	

	public Set<Building> getBuildings() {
		return buildings;
	}

	public void setBuildings(Set<Building> buildings) {
		this.buildings = buildings;
	}

	public Set<Flat> getFlats() {
		return flats;
	}

	public void setFlats(Set<Flat> flats) {
		this.flats = flats;
	}

	

	// Constructors, getters, setters, and equals()/hashCode()

}
