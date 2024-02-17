package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.SigninRequest;
import com.app.dto.UserDTO;
import com.app.dto.UserIdDTO;
import com.app.services.UserServiceImpl;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/users")
public class UserController {

	@Autowired
	private UserServiceImpl userService;

	@PostMapping("/signup")
	public ResponseEntity<?> createUser(@RequestBody UserDTO userDto) {
		try {
			 UserIdDTO createUser = userService.createUser(userDto);
			return ResponseEntity.status(HttpStatus.CREATED).body(createUser);			
		}catch (Exception e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(""+e.getMessage());			
		}
	}

	@GetMapping
	public ResponseEntity<?> getAllUsers() {
		try{
			List<UserIdDTO> userIdDTOs = userService.getAllUsers();
			return new ResponseEntity<>(userIdDTOs, HttpStatus.OK);			
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
	
	@PostMapping("/signIn")
	public ResponseEntity<?> signinUser(@RequestBody SigninRequest signinRequest) {
		System.out.println(signinRequest);
		UserIdDTO userIddto = userService.signInUser(signinRequest);
		if (userIddto != null)
			return ResponseEntity.status(HttpStatus.CREATED).body(userIddto);
		else
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(userIddto);
	}

}
