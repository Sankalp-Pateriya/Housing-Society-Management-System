package com.app.dto;

public class LoginRequest {

	String email;
	String Password;
	public LoginRequest() {
		super();
		// TODO Auto-generated constructor stub
	}
	public LoginRequest(String email, String password) {
		super();
		this.email = email;
		Password = password;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return Password;
	}
	public void setPassword(String password) {
		Password = password;
	}
	@Override
	public String toString() {
		return "LoginRequest [email=" + email + ", Password=" + Password + "]";
	}
}
