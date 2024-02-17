package com.app.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.BuildingRepository;
import com.app.dao.FlatRepository;
import com.app.dao.UserRepository;
import com.app.dto.FlatComponentDTO;
import com.app.dto.FlatDTO;
import com.app.dto.SigninRequest;
import com.app.dto.UserDTO;
import com.app.dto.UserIdDTO;
import com.app.exception.NotFoundException;
import com.app.exception.ResourceNotFoundException;
import com.app.pojos.Building;
import com.app.pojos.Flat;
import com.app.pojos.Role;
import com.app.pojos.User;

@Service
@Transactional
public class UserServiceImpl implements UserService {

	@Autowired
	private UserRepository userRepository;

	@Autowired
	BuildingRepository buildingRepository;

	@Autowired
	FlatRepository flatRepository;

	@Autowired
	private ModelMapper modelMapper;

	@Autowired
	private PasswordEncoder encoder;
	
	@Override
	public UserIdDTO createUser(UserDTO userDTO) {
		User user = modelMapper.map(userDTO, User.class);
		user.setPassword(encoder.encode(userDTO.getPassword()));
		user.setRole(Role.valueOf(userDTO.getRole().toUpperCase()));
		userRepository.save(user);
		user = userRepository.findByEmail(userDTO.getEmail()).get();
		
		UserIdDTO userIdDTO = modelMapper.map(user, UserIdDTO.class);
		System.out.println(userIdDTO);
		return userIdDTO;
	}

	@Override
	public List<UserIdDTO> getAllUsers() {
		List<User> users = userRepository.findAll();
		List<UserIdDTO> userIdDTOs = new ArrayList<>();
		for (User u : users) {
			userIdDTOs.add(modelMapper.map(u, UserIdDTO.class));
		}
		return userIdDTOs;
	}

	@Override
	public UserIdDTO getUserById(Long id) {

		User user = userRepository.findById(id).get();
		UserIdDTO userIdDTO = modelMapper.map(user, UserIdDTO.class);
		return userIdDTO;
	}

	@Override
	public UserIdDTO updateUser(long id, UserDTO userDTO) {
		User user = userRepository.findById(id).orElseThrow(() -> new NotFoundException("Invalid Id"));
		user = modelMapper.map(userDTO, User.class);
		user.setId(id);

		userRepository.save(user);
		UserIdDTO userIdDTO = modelMapper.map(user, UserIdDTO.class);
		return userIdDTO;
	}

	@Override
	public List<FlatDTO> searchFlats(String element, String type, int highArea, int lowArea, int highRent,
			int lowRent) {
		System.out.println();
		System.out.println(element);
		System.out.println();
		List<FlatDTO> flatDTOs = new ArrayList<FlatDTO>();
		List<FlatComponentDTO> flatComponentDTOs = new ArrayList<FlatComponentDTO>();

		List<Building> buildings = buildingRepository.findAll();

		System.out.println();
		System.out.println(buildings);
		System.out.println();
		List<Building> areaBuildings = new ArrayList<Building>();

		for (Building b : buildings) {
			ArrayList<String> list = new ArrayList<String>();
			list.add(b.getCity().toLowerCase());
			list.add(b.getState().toLowerCase());
			String[] arr1 = b.getLine_1().toLowerCase().split(" ");
			for (String str : arr1) {
				list.add(str);
			}
			list.add(b.getPinCode());
			String[] arr2 = b.getLine_2().toLowerCase().split(" ");
			for (String str : arr2) {
				list.add(str);
			}
			for (String str : list) {
				if (str.contains(element.toLowerCase())) {
					areaBuildings.add(b);
					break;
				}
			}
		}

		System.out.println();
		System.out.println(areaBuildings);
		System.out.println();
		for (Building b : areaBuildings) {
			List<Flat> tempList = flatRepository.findByBuildingId(b.getId());
			System.out.println();
			System.out.println(" safsdfsad" + tempList);
			System.out.println();
			List<FlatDTO> convertedTempList = tempList.stream().map((e) -> modelMapper.map(e, FlatDTO.class))
					.filter((e) -> e.isAvailable()).collect(Collectors.toList());
			flatDTOs.addAll(convertedTempList);
			flatComponentDTOs.stream().forEach((e) -> e.setBuildingName(b.getName()));
			flatComponentDTOs.stream().forEach((e) -> e.setCity(b.getCity()));
			flatComponentDTOs.stream().forEach((e) -> e.setLine_1(b.getLine_1()));
			flatComponentDTOs.stream().forEach((e) -> e.setLine_2(b.getLine_2()));
			flatComponentDTOs.stream().forEach((e) -> e.setPINCode(b.getPinCode()));
			flatComponentDTOs.stream().forEach((e) -> e.setState(b.getState()));
			System.out.println();
			System.out.println(" 1 " + flatDTOs);
			System.out.println();
		}
		if (!type.equalsIgnoreCase("any")) {
			if (!type.toLowerCase().equals("any")) {
				flatDTOs = flatDTOs.stream().filter((e) -> {
					return e.getType().toUpperCase().equals(type.toUpperCase());
				}).collect(Collectors.toList());
			}
			System.out.println();
			System.out.println(" 2 " + flatDTOs);
			System.out.println();
		}
		flatDTOs = flatDTOs.stream().filter((e) -> {
			return e.getArea() >= lowArea && e.getArea() <= highArea;
		}).collect(Collectors.toList());
		System.out.println();
		System.out.println(" 3 " + flatDTOs);
		System.out.println();
		flatDTOs = flatDTOs.stream().filter((e) -> {
			return e.getRent() >= lowRent && e.getRent() <= highRent;
		}).collect(Collectors.toList());
		System.out.println();
		System.out.println(" 4 " + flatDTOs);
		System.out.println();
		System.out.println();
		System.out.println(flatDTOs);
		System.out.println();
		return flatDTOs;
	}
    
    
    @Override
	public UserIdDTO signInUser(SigninRequest signinRequest) {
		User user = userRepository.findByEmail(signinRequest.getEmail())
				.orElseThrow(() -> new ResourceNotFoundException("No User with email found!!"));

		if (encoder.matches(signinRequest.getPassword(), user.getPassword())) {
			return modelMapper.map(user, UserIdDTO.class);
		}
		return null;
	}
    // Other methods for updating, deleting, and retrieving users

	public List<UserIdDTO> getSecretary() {
		List<User> users=userRepository.findAll();
		List<UserIdDTO> userIdDtoList=new ArrayList<>();
		for(User u:users) {
			if(u.getRole().toString().equals("SECRETARY")) {
			userIdDtoList.add(modelMapper.map(u, UserIdDTO.class))	;
			}
		}
		System.out.println("@@@@@@@@@@@@@@@@@@@"+userIdDtoList);
		return userIdDtoList;
	}
}