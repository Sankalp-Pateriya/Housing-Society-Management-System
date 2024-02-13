package com.app.dto;






public class SignupRequest {
	//@JsonProperty(access = Access.READ_ONLY)
	
	private String name;
	private String email;
	private String password;
	private Long contact;
	private String role;
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
	public Long getContact() {
		return contact;
	}
	public void setContact(Long contact) {
		this.contact = contact;
	}
	public String getRole() {
		return role;
	}
	public void setRole(String role) {
		this.role = role;
	}
	@Override
	public String toString() {
		return "SignupRequest [name=" + name + ", email=" + email + ", contact=" + contact + ", role=" + role + "]";
	}
	

	
	
	
}
