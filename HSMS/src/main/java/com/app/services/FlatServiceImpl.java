package com.app.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.BuildingRepository;
import com.app.dao.FlatRepository;
import com.app.dao.UserRepository;
import com.app.dto.BuildingIdDTO;
import com.app.dto.FlatDTO;
import com.app.dto.FlatIdDTO;
import com.app.dto.UserIdDTO;
import com.app.exception.ResourceNotFoundException;
import com.app.pojos.Building;
import com.app.pojos.Flat;
import com.app.pojos.User;

@Service
@Transactional
public class FlatServiceImpl implements FlatService {
	
	@Autowired
	private ModelMapper modelMapper;
	
	@Autowired
	private FlatRepository flatRepository;
	
	@Autowired
	private BuildingRepository buildingRepository;
	
	@Autowired
	private UserRepository userRepository;

	public FlatDTO addFlat(FlatDTO flatdto) {
	Optional<User> userById = userRepository.findById(flatdto.getUserId());
	User user = userById.get();
	if(!user.getRole().toString().equals("USER")) {
		return null;
	}
	Flat flat=modelMapper.map(flatdto, Flat.class);
	User u = userRepository.findById(flatdto.getUserId()).get();
	flat.setUser(u);
	Building building = buildingRepository.findById(flatdto.getBuildingId()).get();
	flat.setBuilding(building);
	flat.setAvailable(true);

//	flat.setBuilding(buildingRepository.findById(flatdto.getBuildingId()).get());
//	flat.setUser(userRepository.findById(flatdto.getUserId()).get());
//	System.out.println("Flat Building:"+flat.getBuilding());
//	System.out.println("Flat OWner:"+flat.getUser());
	flatRepository.save(flat);
	return flatdto;
	
	}

	@Override
	public List<FlatIdDTO> getAllFlats() {
		List<Flat> allFlats = flatRepository.findAll();
		List<FlatIdDTO> allFlatsDto = new ArrayList<FlatIdDTO>();
		for (Flat flat : allFlats)
		{
			FlatIdDTO flatDto = modelMapper.map(flat, FlatIdDTO.class);
			User u = userRepository.findById(flat.getUser().getId()).get();
			flatDto.setUserId(u.getId());
			Building b = buildingRepository.findById(flat.getBuilding().getId()).get();
			flatDto.setBuildingId(b.getId());
			allFlatsDto.add(flatDto);
			System.out.println("allFaltsDto"+allFlatsDto);
		}
		
		return allFlatsDto;
	}

	@Override
	public FlatIdDTO getSingleFlats(Long id) {
		Optional<Flat> findById = flatRepository.findById(id);
		Flat flat = findById.get();
		if(flat!=null) {
			FlatIdDTO flatDTO = modelMapper.map(flat,FlatIdDTO.class);
			Building building = flat.getBuilding();
			flatDTO.setBuildingId(building.getId());
			User user = flat.getUser();
			flatDTO.setUserId(user.getId());
			return flatDTO;
		}
		return null;
	}

	@Override
	public FlatIdDTO bookFlat(Long id,Long uid) {
		Optional<Flat> findById = flatRepository.findById(id);
		Flat flat = findById.get();
		User user=userRepository.findById(flat.getUser().getId()).orElseThrow(()->new ResourceNotFoundException("No user found"));
		System.out.println("UserId"+uid);
		System.out.println("flatOwner"+flat.getUser().getId());
		if(flat.getUser().getId()==uid)
		{
			return null;
		}
		else if(flat.isAvailable()) {
			flat.setAvailable(false);
			
			flat.setUser_id(uid);
			flatRepository.save(flat);
			FlatIdDTO flatDTO = modelMapper.map(flat, FlatIdDTO.class);
			flatDTO.setBuildingId(flat.getBuilding().getId());
			flatDTO.setUserId(flat.getUser().getId());
			return flatDTO;
		}else {
			return null;
		}
	}

	@Override
	public List<FlatIdDTO> getBuildingflats(long bid) {
		List<Flat> flats=flatRepository.findAll();
		List<FlatIdDTO> flatIdDto=new ArrayList<>();
		for(Flat f:flats) {
			if(f.getBuilding().getId()==bid) {
				flatIdDto.add(modelMapper.map(f, FlatIdDTO.class));
			}
		}
		return flatIdDto;
	}

	@Override
	public List<UserIdDTO> getUsersOnly() {
		List<User> users = userRepository.findAll();
		List<UserIdDTO> userIdDTOs = users.stream().filter((e)->e.getRole().toString().equals("USER")).map((e)->modelMapper.map(e,UserIdDTO.class)).collect(Collectors.toList());
		return userIdDTOs;
	}

	@Override
	public List<FlatIdDTO> getCityFlat(String city) {
		List<Flat> flats=flatRepository.findAll();
		List<FlatIdDTO> flatsDto=new ArrayList<>();
		for(Flat f:flats) {
			if(f.getBuilding().getCity().equalsIgnoreCase(city)) {
				flatsDto.add(modelMapper.map(f, FlatIdDTO.class));
			}
		}
		return flatsDto;
	}

	@Override
	public List<FlatIdDTO> getUserFlat(long user_id) {
		List<Flat> flats=flatRepository.findAll();
		List<FlatIdDTO> flatsdto=new ArrayList<>();
		for(Flat f:flats) {
			if(f.getUser_id()==user_id) {
				flatsdto.add(modelMapper.map(f, FlatIdDTO.class ));
			}
		}
		return flatsdto;
	}
	public List<List<Object>> getflatNBuilding(Long id) {
		System.out.println();
		System.out.println("8");
		System.out.println();
		List<List<Object>> wholeList = new ArrayList<>();
//		List<Object> 
		Flat flat = flatRepository.findById(id).get();
		FlatIdDTO flatIdDTO = modelMapper.map(flat, FlatIdDTO.class);
		List<Object> flatList = new ArrayList<>();
		flatIdDTO.setUserId(flat.getUser().getId());
		flatIdDTO.setBuildingId(id);
		flatList.add(flatIdDTO);
		System.out.println();
		System.out.println("5");
		System.out.println();
		Building building = buildingRepository.findById(flat.getBuilding().getId()).get();
		System.out.println();
		System.out.println("7");
		System.out.println();
		BuildingIdDTO buildingIdDTO = modelMapper.map(building, BuildingIdDTO.class);
		System.out.println();
		System.out.println("123456"+buildingIdDTO);
		System.out.println();
		List<Object> buildingList = new ArrayList<>();
		System.out.println();
//		System.out.println("2"+building.getUser().getId());
		System.out.println();
//		buildingIdDTO.setUserId(building.getUser().getId());
		buildingList.add(buildingIdDTO);
		wholeList.add(buildingList);
		System.out.println();
		System.out.println("999");
		System.out.println();
		wholeList.add(flatList);
		System.out.println();
		System.out.println("10");
		System.out.println();
		return wholeList;
	}
	

}
