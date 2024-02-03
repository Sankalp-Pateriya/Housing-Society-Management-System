package com.app.service;

import com.app.dto.UserAuthDto;
import com.app.dto.UserDto;
import com.app.entities.User;

public interface UserService {
	
	String createNewUser( User newUser);

	String authorizeUser( UserAuthDto userAuthDto);
	
}
