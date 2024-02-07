package com.app.dto;

import com.app.pojos.Role;

public class UserDTO  {

   
    private String name;
    private String email;
    private String password;
    private Role role;
    
    

    public UserDTO() {
		super();
		// TODO Auto-generated constructor stub
	}

	public UserDTO( String name,  String email, String password, Role role) {
        
        this.name = name;
        
        this.email = email;
        this.password = password;
        this.role = role;
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

	@Override
	public String toString() {
		return "UserDTO [name=" + name + ", email=" + email + ", password=" + password + ", role=" + role + "]";
	}

	

	
	
	

}