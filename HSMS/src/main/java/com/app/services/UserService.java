package com.app.services;

import java.util.List;
import java.util.Optional;

import com.app.dto.FlatDTO;
import com.app.dto.SigninRequest;
import com.app.dto.UserDTO;
import com.app.pojos.User;

public interface UserService {
	UserDTO createUser(UserDTO userDto);
	List<UserDTO> getAllUsers();
	UserDTO getUserById(Long id);
	UserDTO updateUser(long id,UserDTO userDTO);
	List<FlatDTO> searchFlats(String element, String type, int highArea, int lowArea,int highRent,int lowRent);
	UserDTO signInUser(SigninRequest signinRequest);
}
