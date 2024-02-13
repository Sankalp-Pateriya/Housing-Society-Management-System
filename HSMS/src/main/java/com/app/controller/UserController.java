package com.app.controller;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.UserDTO;
import com.app.exception.NotFoundException;
import com.app.pojos.User;
import com.app.services.UserServiceImpl;

@RestController
@RequestMapping("/users")
public class UserController {

	@Autowired
	private UserServiceImpl userService;

	@PostMapping
	public ResponseEntity<?> createUser(@RequestBody UserDTO userDto) {
		userService.createUser(userDto);
		return ResponseEntity.status(HttpStatus.CREATED).body(userDto);
	}

	@GetMapping
	public ResponseEntity<List<UserDTO>> getAllUsers() {
		List<UserDTO> userDTOs = userService.getAllUsers();

		return new ResponseEntity<>(userDTOs, HttpStatus.OK);
	}

	@GetMapping("/{id}")
	public ResponseEntity<?> getUserById(@PathVariable Long id) {
		try {
			return ResponseEntity.status(HttpStatus.OK).body(userService.getUserById(id));			
		}catch(Exception e) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User Not found!!");	
		}
	}

	@PutMapping("/{id}")
	public ResponseEntity<?> updateUser(@PathVariable Long id, @RequestBody UserDTO userDTO) {

		return ResponseEntity.status(HttpStatus.OK).body(userService.updateUser(id, userDTO));
	}

}
