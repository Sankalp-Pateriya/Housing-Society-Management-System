package com.app.services;

import java.util.ArrayList;
import java.util.List;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;


import com.app.dao.UserRepository;
import com.app.dto.SignupRequest;
import com.app.dto.UserDTO;
import com.app.exception.NotFoundException;
import com.app.pojos.Role;
import com.app.pojos.User;


@Service
@Transactional
public class UserServiceImpl implements UserService{

    @Autowired
    private UserRepository userRepository;
    
    @Autowired
    private ModelMapper modelMapper;
    
    @Autowired
	private PasswordEncoder encoder;

    
    
    public UserDTO createUser(SignupRequest signupRequest) {
    	User user= modelMapper.map(signupRequest, User.class);
    	user.setPassword(encoder.encode(signupRequest.getPassword()));
    	user.setRole(Role.valueOf(signupRequest.getRole().toUpperCase())); 
    	userRepository.save(user);  
    	UserDTO userDTO=modelMapper.map(signupRequest, UserDTO.class);
    	
    	return userDTO;
    }
    
    
    

    public List<UserDTO> getAllUsers() {
    	List<User> users=userRepository.findAll();
    	 List<UserDTO> userDTOs=new ArrayList<>();
         for(User u:users) {
         	userDTOs.add(modelMapper.map(u, UserDTO.class));
         }
    	return userDTOs;
    }
    
    public User getUserById(Long id) {
    	
    	User user = userRepository.findById(id).get();
        return user;
    }

    public UserDTO updateUser(long id,UserDTO userDTO) {
    	User user= userRepository.findById(id).orElseThrow(()->new NotFoundException("Invalid Id"));
    	user= modelMapper.map(userDTO, User.class);
    	user.setId(id);
    	
    	userRepository.save(user);
        return userDTO;
    }

	@Override
	public String deleteUser(Long id) {
		User user = userRepository.findById(id).orElseThrow(()->new NotFoundException("No such user exists!"));
		user = null;
		userRepository.deleteById(id);
		return "User deleted Successfully";
	}

    // Other methods for updating, deleting, and retrieving users
}