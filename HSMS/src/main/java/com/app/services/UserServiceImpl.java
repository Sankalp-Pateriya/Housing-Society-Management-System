package com.app.services;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.BuildingRepository;
import com.app.dao.FlatRepository;
import com.app.dao.UserRepository;
import com.app.dto.FlatComponentDTO;
import com.app.dto.FlatDTO;
import com.app.dto.UserDTO;
import com.app.exception.NotFoundException;
import com.app.pojos.Building;
import com.app.pojos.Flat;
import com.app.pojos.User;

@Service
public class UserServiceImpl {

    @Autowired
    private UserRepository userRepository;
    
    @Autowired
    BuildingRepository buildingRepository;
    
    @Autowired
    FlatRepository flatRepository;
    
    
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
    
    public UserDTO getUserById(Long id) {
    	
    	User user = userRepository.findById(id).get();
    	UserDTO userDTO = modelMapper.map(user, UserDTO.class);
        return userDTO;
    }

    public UserDTO updateUser(long id,UserDTO userDTO) {
    	User user= userRepository.findById(id).orElseThrow(()->new NotFoundException("Invalid Id"));
    	user= modelMapper.map(userDTO, User.class);
    	user.setId(id);
    	
    	userRepository.save(user);
        return userDTO;
    }


	public List<FlatDTO> searchFlats(String element, String type, int highArea, int lowArea, int highRent,
			int lowRent) {
		System.out.println();
		System.out.println(element);
		System.out.println();
		List<FlatDTO> flatDTOs = new ArrayList<FlatDTO>();
		List<FlatComponentDTO> flatComponentDTOs = new ArrayList<FlatComponentDTO>() ; 
		
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
			flatComponentDTOs.stream().forEach((e)->e.setBuildingName(b.getName()));
			flatComponentDTOs.stream().forEach((e)->e.setCity(b.getCity()));
			flatComponentDTOs.stream().forEach((e)->e.setLine_1(b.getLine_1()));
			flatComponentDTOs.stream().forEach((e)->e.setLine_2(b.getLine_2()));
			flatComponentDTOs.stream().forEach((e)->e.setPINCode(b.getPinCode()));
			flatComponentDTOs.stream().forEach((e)->e.setState(b.getState()));
			System.out.println();
			System.out.println(" 1 " + flatDTOs);
			System.out.println();
		}
		if ( !type.equalsIgnoreCase("any")) {
			if (!type.toLowerCase().equals("any")) {
				flatDTOs = flatDTOs.stream().filter((e) -> {
					return e.getType().toUpperCase().equals(type.toUpperCase());
				}).collect(Collectors.toList());
			}
			System.out.println();
			System.out.println(" 2 " + flatDTOs);
			System.out.println();
		}

		// if (highArea >= lowArea && highArea != 0 && lowArea != 0) {
		flatDTOs = flatDTOs.stream().filter((e) -> {
			return e.getArea() >= lowArea && e.getArea() <= highArea;
		}).collect(Collectors.toList());
		System.out.println();
		System.out.println(" 3 " + flatDTOs);
		System.out.println();
//		}
//		if (highRent >= lowRent && highRent != 0 && lowRent != 0) {
		flatDTOs = flatDTOs.stream().filter((e) -> {
			return e.getRent() >= lowRent && e.getRent() <= highRent;
		}).collect(Collectors.toList());
		System.out.println();
		System.out.println(" 4 " + flatDTOs);
		System.out.println();
//		}
		System.out.println();
		System.out.println(flatDTOs);
		System.out.println();
		return flatDTOs;
	}
    // Other methods for updating, deleting, and retrieving users
}