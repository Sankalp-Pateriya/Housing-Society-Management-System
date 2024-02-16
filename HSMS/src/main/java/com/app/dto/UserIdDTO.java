package com.app.dto;

import com.app.pojos.Role;

public class UserIdDTO {

	private Long id;
	private String name;
	private String email;
	private Long contact;
	private Role role;

	public UserIdDTO() {
		super();
		// TODO Auto-generated constructor stub
	}

	public UserIdDTO(Long id, String name, String email, Long contact, Role role) {
		super();
		this.id = id;
		this.name = name;
		this.email = email;
		this.contact = contact;
		this.role = role;
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

	public Long getContact() {
		return contact;
	}

	public void setContact(Long contact) {
		this.contact = contact;
	}

	public Role getRole() {
		return role;
	}

	public void setRole(Role role) {
		this.role = role;
	}

	@Override
	public String toString() {
		return "UserIdDTO [id=" + id + ", name=" + name + ", email=" + email + ", contact=" + contact + ", role=" + role
				+ "]";
	}

}
