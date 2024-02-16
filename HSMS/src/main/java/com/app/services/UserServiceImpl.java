package com.app.services;

import java.util.ArrayList;
import java.util.List;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.app.dao.UserRepository;
import com.app.dto.SigninRequest;
import com.app.dto.UserDTO;
import com.app.exception.NotFoundException;
import com.app.exception.ResourceNotFoundException;
import com.app.pojos.Role;
import com.app.pojos.User;

@Service
@Transactional
public class UserServiceImpl implements UserService {

	@Autowired
	private UserRepository userRepository;

	@Autowired
	private ModelMapper modelMapper;

	@Autowired
	private PasswordEncoder encoder;

	public UserDTO createUser(UserDTO userDTO) {
		User user = modelMapper.map(userDTO, User.class);
		user.setPassword(encoder.encode(userDTO.getPassword()));
		user.setRole(Role.valueOf(userDTO.getRole().toUpperCase()));
		userRepository.save(user);

		return userDTO;
	}

	public List<UserDTO> getAllUsers() {
		List<User> users = userRepository.findAll();
		List<UserDTO> userDTOs = new ArrayList<>();
		for (User u : users) {
			userDTOs.add(modelMapper.map(u, UserDTO.class));
		}
		return userDTOs;
	}

	public User getUserById(Long id) {

		User user = userRepository.findById(id).get();
		return user;
	}

	public UserDTO updateUser(long id, UserDTO userDTO) {
		User user = userRepository.findById(id).orElseThrow(() -> new NotFoundException("Invalid Id"));
		user = modelMapper.map(userDTO, User.class);
		user.setId(id);

		userRepository.save(user);
		return userDTO;
	}

	@Override
	public String deleteUser(Long id) {
		User user = userRepository.findById(id).orElseThrow(() -> new NotFoundException("No such user exists!"));
		user = null;
		userRepository.deleteById(id);
		return "User deleted Successfully";
	}

	@Override
	public UserDTO signInUser(SigninRequest signinRequest) {
		User user = userRepository.findByEmail(signinRequest.getEmail())
				.orElseThrow(() -> new ResourceNotFoundException("No User with email found!!"));

		if (encoder.matches(signinRequest.getPassword(), user.getPassword())) {
			return modelMapper.map(user, UserDTO.class);
		}
		return null;
	}

	// Other methods for updating, deleting, and retrieving users
}