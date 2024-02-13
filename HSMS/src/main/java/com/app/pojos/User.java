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

	@Column(name = "contact")
	@Digits(integer = 10, fraction = 0, message = "Contact number must be of 10 digits")
	private Long contact;

	@Column(name = "role")
	@Enumerated(EnumType.STRING)
	private Role role;

	@OneToOne(mappedBy = "user", cascade = CascadeType.DETACH)
	private Building building;

	@OneToMany(mappedBy = "user", cascade = CascadeType.DETACH)
	private Set<Flat> flats = new HashSet<>();

	public User() {
		super();
		// TODO Auto-generated constructor stub
	}

	public User(
			@NotBlank(message = "Name is required") @Size(max = 50, message = "Name must be less than 50 characters") String name,
			@NotBlank(message = "Email is required") @Email(message = "Email must be valid") String email,
			String password,
			@Digits(integer = 10, fraction = 0, message = "Contact number must be of 10 digits") Long contact,
			Role role) {
		super();
		this.name = name;
		this.email = email;
		this.password = password;
		this.contact = contact;
		this.role = role;
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

	public Building getBuilding() {
		return building;
	}

	public void setBuilding(Building building) {
		this.building = building;
	}

	public Set<Flat> getFlats() {
		return flats;
	}

	public void setFlats(Set<Flat> flats) {
		this.flats = flats;
	}

	@Override
	public String toString() {
		return "User [id=" + id + ", name=" + name + ", email=" + email + ", contact=" + contact + ", role=" + role
				+ "]";
	}

	// Constructors, getters, setters, and equals()/hashCode()

}
