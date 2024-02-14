package com.app.services;

import java.util.ArrayList;
import java.util.List;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import com.app.dao.UserRepository;

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

    
    
    public UserDTO createUser(UserDTO userDTO) {
    	User user= modelMapper.map(userDTO, User.class);
    	user.setPassword(encoder.encode(userDTO.getPassword()));
    	user.setRole(Role.valueOf(userDTO.getRole().toUpperCase())); 
    	userRepository.save(user);  
    	
    	
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
	
	
	public User getLoggedInUser() {
        // Get the authentication object from the security context
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

        if (authentication != null && authentication.isAuthenticated() && authentication.getPrincipal() instanceof UserDetails) {
            UserDetails userDetails = (UserDetails) authentication.getPrincipal();
            // Extract the username from the UserDetails
            String username = userDetails.getUsername();
            
            // Find the user by username (assuming username is email in your case)
            if (StringUtils.hasText(username)) {
                return userRepository.findByEmail(username).orElse(null);
            }
        }
        System.out.println("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");
        return null; // No logged-in user found
    }

    // Other methods for updating, deleting, and retrieving users
}