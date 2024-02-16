package com.app.services;

import java.util.List;

import com.app.dto.SignupRequest;
import com.app.dto.FlatDTO;
import com.app.dto.UserDTO;
import com.app.pojos.User;

public interface UserService {
	UserDTO createUser(SignupRequest signupRequest);
	List<UserDTO> getAllUsers();
	Optional<User> getUserById(Long id);
	User updateUser(long id,UserDTO userDTO);
	List<FlatDTO> searchFlats(String element, String type, int highArea, int lowArea,int highRent,int lowRent);
}
