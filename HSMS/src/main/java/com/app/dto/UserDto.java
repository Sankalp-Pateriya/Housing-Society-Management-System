package com.app.dto;

public class UserDto {

	
	private Long UserId;
	
	private String name;
	
	private long contactNumber;
	
	private String emailID;
	
	private String role;
	
	private String password;

	

	public Long getUserId() {
		return UserId;
	}



	public void setUserId(Long userId) {
		UserId = userId;
	}



	public String getName() {
		return name;
	}



	public void setName(String name) {
		this.name = name;
	}



	public long getContactNumber() {
		return contactNumber;
	}



	public void setContactNumber(long contactNumber) {
		this.contactNumber = contactNumber;
	}



	public String getEmailID() {
		return emailID;
	}



	public void setEmailID(String emailID) {
		this.emailID = emailID;
	}



	public String getRole() {
		return role;
	}



	public void setRole(String role) {
		this.role = role;
	}



	public String getPassword() {
		return password;
	}



	public void setPassword(String password) {
		this.password = password;
	}



	public UserDto(Long userId, String name, long contactNumber, String emailID, String role, String password) {
		super();
		UserId = userId;
		this.name = name;
		this.contactNumber = contactNumber;
		this.emailID = emailID;
		this.role = role;
		this.password = password;
	}



	public UserDto() {
		super();
		// TODO Auto-generated constructor stub
	}



	@Override
	public String toString() {
		return "UserDto [UserId=" + UserId + ", name=" + name + ", contactNumber=" + contactNumber + ", emailID="
				+ emailID + ", role=" + role + ", password=" + password + "]";
	}
	
	
	
}
