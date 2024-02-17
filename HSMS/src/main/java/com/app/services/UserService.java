package com.app.services;

import java.util.List;
import java.util.Optional;

import com.app.dto.FlatDTO;
import com.app.dto.SigninRequest;
import com.app.dto.UserDTO;
import com.app.dto.UserIdDTO;
import com.app.pojos.User;

public interface UserService {
	UserIdDTO createUser(UserDTO userDto);
	List<UserIdDTO> getAllUsers();
	UserIdDTO getUserById(Long id);
	UserIdDTO updateUser(long id,UserDTO userDTO);
	List<FlatDTO> searchFlats(String element, String type, int highArea, int lowArea,int highRent,int lowRent);
	UserIdDTO signInUser(SigninRequest signinRequest);
	List<UserIdDTO> getSecretary();
}
