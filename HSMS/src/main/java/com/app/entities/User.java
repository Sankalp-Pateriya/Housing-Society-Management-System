package com.app.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table
public class User {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long UserId;
	
	private String name;
	
	private long contactNumber;
	
	private String emailID;
	
	private String password;
	
	private String role;

	public User(Long userId, String name, long contactNumber, String emailID, String password, String role) {
		super();
		UserId = userId;
		this.name = name;
		this.contactNumber = contactNumber;
		this.emailID = emailID;
		this.password = password;
		this.role = role;
	}

	public User() {
		super();
	}

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

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	@Override
	public String toString() {
		return "User [UserId=" + UserId + ", name=" + name + ", contactNumber=" + contactNumber + ", emailID=" + emailID
				+ ", role=" + role + "]";
	}
	
	
}
