package com.app.service;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.custom_exceptions.ResourceNotFoundException;
import com.app.dao.UserDao;
import com.app.dto.UserAuthDto;
import com.app.dto.UserDto;
import com.app.entities.User;
@Service
@Transactional
public class UserServiceImpl implements UserService {

	@Autowired
	UserDao userDao;
	
	@Autowired
	ModelMapper mapper;
	
	@Override
	public String createNewUser(User newUser) {
//		System.out.println(""+userDto);
		
//		User newUser = mapper.map(userDto,User.class );
		System.out.println("From Service class  :  "+newUser);
		userDao.save(newUser);
		
		return "Added new User Successfully!!";
	}

	@Override
	public String authorizeUser(UserAuthDto userAuthDto) {
				
		userDao.findByEmailIDAndPassword(userAuthDto.getEmailID(),userAuthDto.getPassword()).orElseThrow(()->new ResourceNotFoundException("Invalid email or password !!!") );
		return "Authentication Successfull !!";
	}

}
