package com.app.services;

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
import com.app.dto.FlatDTO;
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
	if(!user.getRole().toString().equals("SECRETARY")) {
		return null;
	}
	Flat flat=modelMapper.map(flatdto, Flat.class);
	flat.setBuilding(buildingRepository.findById(flatdto.getBuildingId()).get());
	flat.setUser(userRepository.findById(flatdto.getUserId()).get());
	System.out.println("Flat Building:"+flat.getBuilding());
	System.out.println("Flat OWner:"+flat.getUser());
	flatRepository.save(flat);
	return flatdto;
	
	}

	@Override
	public List<FlatDTO> getAllFlats() {
		List<Flat> flats = flatRepository.findAll();
		List<FlatDTO> flatDTOs = flats.stream().filter((e)->e.isAvailable()).map((e)->modelMapper.map(e, FlatDTO.class)).collect(Collectors.toList());
		return flatDTOs;
	}

	@Override
	public FlatDTO getSingleFlats(Long id) {
		Optional<Flat> findById = flatRepository.findById(id);
		Flat flat = findById.get();
		if(flat!=null) {
			FlatDTO flatDTO = modelMapper.map(flat,FlatDTO.class);
			Building building = flat.getBuilding();
			flatDTO.setBuildingId(building.getId());
			User user = flat.getUser();
			flatDTO.setUserId(user.getId());
			return flatDTO;
		}
		return null;
	}

	@Override
	public FlatDTO bookFlat(Long id) {
		Optional<Flat> findById = flatRepository.findById(id);
		Flat flat = findById.get();
		if(flat.isAvailable()) {
			flat.setAvailable(false);
			flatRepository.save(flat);
			FlatDTO flatDTO = modelMapper.map(flat, FlatDTO.class);
			flatDTO.setBuildingId(flat.getBuilding().getId());
			flatDTO.setUserId(flat.getUser().getId());
			return flatDTO;
		}else {
			return null;
		}
	}
	

}
