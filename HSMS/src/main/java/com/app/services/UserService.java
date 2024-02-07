package com.app.services;

import java.util.List;
import java.util.Optional;

import com.app.dto.UserDTO;
import com.app.pojos.User;

public interface UserService {
	UserDTO createUser(UserDTO userDto);
	List<UserDTO> getAllUsers();
	Optional<User> getUserById(Long id);
	User updateUser(long id,UserDTO userDTO);
}
