package com.app.services;

import java.util.List;
import java.util.Optional;

import com.app.dto.FlatDTO;
import com.app.dto.UserDTO;
import com.app.pojos.User;

public interface UserService {
	UserDTO createUser(UserDTO userDto);
	List<UserDTO> getAllUsers();
	Optional<User> getUserById(Long id);
	User updateUser(long id,UserDTO userDTO);
	List<FlatDTO> searchFlats(String element, String type, int highArea, int lowArea,int highRent,int lowRent);
}
