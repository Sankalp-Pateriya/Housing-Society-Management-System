package com.app.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.UserAuthDto;
import com.app.dto.UserDto;
import com.app.entities.User;
import com.app.service.UserService;

@RestController
@RequestMapping("/")
@Validated
public class UserController {
	
	@Autowired
	private UserService userService ;
	
	@PostMapping("signUp")
	public ResponseEntity<?> createNewUser(@Valid @RequestBody User newUser) {
		System.out.println(newUser);
		return ResponseEntity.status(HttpStatus.CREATED).body(userService.createNewUser(newUser));
	}

	@PostMapping("signIn")
	public ResponseEntity<?> authorizeUser(@Valid @RequestBody UserAuthDto userAuthDto) {
		System.out.println(userAuthDto);
		return ResponseEntity.status(HttpStatus.OK).body(userService.authorizeUser(userAuthDto));
	} 
}
