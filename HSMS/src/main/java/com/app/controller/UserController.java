package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.SigninRequest;
import com.app.dto.UserDTO;
import com.app.services.UserService;

@RestController
@RequestMapping("/users")
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {

	@Autowired
	UserService userService;

	@PostMapping
	public ResponseEntity<?> createUser(@RequestBody UserDTO userDTO) {
		System.out.println(userDTO);
		userService.createUser(userDTO);
		return ResponseEntity.status(HttpStatus.CREATED).body(userDTO);
	}

	@GetMapping
	public ResponseEntity<?> getAllUsers() {
		return ResponseEntity.status(HttpStatus.OK).body(userService.getAllUsers());
	}

	@PutMapping("/{id}")
	public ResponseEntity<?> updateUser(@PathVariable Long id, @RequestBody UserDTO userDTO) {
		return ResponseEntity.status(HttpStatus.OK).body(userService.updateUser(id, userDTO));
	}

	@DeleteMapping
	public ResponseEntity<?> deleteUser(@PathVariable Long id) {
		return ResponseEntity.status(HttpStatus.OK).body(userService.deleteUser(id));
	}

	@PostMapping("/signIn")
	public ResponseEntity<?> signinUser(@RequestBody SigninRequest signinRequest) {
		System.out.println(signinRequest);
		UserDTO userdto = userService.signInUser(signinRequest);
		if (userdto != null)
			return ResponseEntity.status(HttpStatus.CREATED).body(userdto);
		else
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(userdto);
	}

}
