package com.app.controller;

import javax.validation.Valid;
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
import com.app.dto.SigninResponse;
import com.app.dto.SignupRequest;
import com.app.dto.UserDTO;
import com.app.services.UserServiceImpl;


@RestController
@RequestMapping("/users")
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {

	@Autowired
	UserService userService;
	
	@Autowired
	private AuthenticationManager mgr;
	
	@Autowired
	private JwtUtils utils;

	@PostMapping("/signup")
	public ResponseEntity<?> createUser(@RequestBody UserDTO userDto) {
		try {
			userService.createUser(userDto);
			return ResponseEntity.status(HttpStatus.CREATED).body(userDto);			
		}catch (Exception e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(""+e.getMessage());			
		}
	}
	
//	@PostMapping("/login")
//    public ResponseEntity<?> login(@Valid @RequestBody LoginRequest loginRequest){
//        return status(200).body(userService.login(loginRequest));
//    }
	

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
	
	@DeleteMapping
	public ResponseEntity<?> deleteUser(@PathVariable Long id) {
		return ResponseEntity.status(HttpStatus.OK).body(userService.deleteUser(id));
	}
	
	@PostMapping("/signin")
	public ResponseEntity<?> signIn(@RequestBody @Valid SigninRequest request) {
		System.out.println("in sign in " + request);
		// invoke autheticate(...) of Authenticate for auth
		Authentication principal = mgr
				.authenticate(new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));
		// generate JWTS
		String jwtToken = utils.generateJwtToken(principal);
		return ResponseEntity.ok(new SigninResponse(jwtToken, "User authentication success!!!"));
	}

}
