package com.app.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.UserRepository;
import com.app.dto.UserDTO;
import com.app.exception.NotFoundException;
import com.app.pojos.User;

@Service
public class UserServiceImpl {

    @Autowired
    private UserRepository userRepository;
    
    @Autowired
    private ModelMapper modelMapper;

    public UserDTO createUser(UserDTO userDto) {
    	User user= modelMapper.map(userDto, User.class);
    	userRepository.save(user);        
    	return userDto;
    }

    public List<UserDTO> getAllUsers() {
    	List<User> users=userRepository.findAll();
    	 List<UserDTO> userDTOs=new ArrayList<>();
         for(User u:users) {
         	userDTOs.add(modelMapper.map(u, UserDTO.class));
         }
    	return userDTOs;
    }
    
    public Optional<User> getUserById(Long id) {
        return userRepository.findById(id);
    }

    public UserDTO updateUser(long id,UserDTO userDTO) {
    	User user= userRepository.findById(id).orElseThrow(()->new NotFoundException("Invalid Id"));
    	user= modelMapper.map(userDTO, User.class);
    	user.setId(id);
    	
    	userRepository.save(user);
        return userDTO;
    }

    // Other methods for updating, deleting, and retrieving users
}