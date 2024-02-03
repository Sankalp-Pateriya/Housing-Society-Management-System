package com.app.dto;

public class UserAuthDto {
	
	private String emailID;
	
	private String password;

	
	
	public UserAuthDto(String emailID, String password) {
		super();
		this.emailID = emailID;
		this.password = password;
	}

	public String getEmailID() {
		return emailID;
	}

	public UserAuthDto() {
		super();
	}

	public void setEmailID(String emailID) {
		this.emailID = emailID;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
	
	
	
}
