package com.app.services;

import java.util.List;

import com.app.dto.SigninRequest;
import com.app.dto.UserDTO;
import com.app.pojos.User;

public interface UserService {
	UserDTO createUser(UserDTO userDTO);

	List<UserDTO> getAllUsers();

	User getUserById(Long id);

	UserDTO updateUser(long id, UserDTO userDTO);

	String deleteUser(Long id);

	UserDTO signInUser(SigninRequest signinRequest);

}
