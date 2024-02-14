package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.UserDTO;
import com.app.services.UserServiceImpl;

@RestController
@RequestMapping("/users")
public class UserController {

	@Autowired
	private UserServiceImpl userService;

	@PostMapping
	public ResponseEntity<?> createUser(@RequestBody UserDTO userDto) {
		try {
			userService.createUser(userDto);
			return ResponseEntity.status(HttpStatus.CREATED).body(userDto);			
		}catch (Exception e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(""+e.getMessage());			
		}
	}

	@GetMapping
	public ResponseEntity<?> getAllUsers() {
		try{
			List<UserDTO> userDTOs = userService.getAllUsers();
			return new ResponseEntity<>(userDTOs, HttpStatus.OK);			
		}catch (Exception e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(""+e.getMessage());
		}
		
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
		try {
			return ResponseEntity.status(HttpStatus.OK).body(userService.updateUser(id, userDTO));			
		}catch (Exception e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(""+e.getMessage());
		}
	}

}
