package com.app.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.BuildingRepository;
import com.app.dao.FlatRepository;
import com.app.dao.UserRepository;
import com.app.dto.FlatDTO;
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
		if (!user.getRole().toString().equals("SECRETARY")) {
			return null;
		}
		Flat flat = modelMapper.map(flatdto, Flat.class);
		flat.setBuilding(buildingRepository.findById(flatdto.getBuildingId()).get());
		flat.setUser(userRepository.findById(flatdto.getUserId()).get());
		System.out.println("Flat Building:" + flat.getBuilding());
		System.out.println("Flat OWner:" + flat.getUser());
		
		flatRepository.save(flat);
		return flatdto;

	}

	@Override
	public List<FlatDTO> getAllFlats() {
		List<Flat> flats = flatRepository.findAll();
		List<FlatDTO> flatDTOs = flats.stream().map((e) -> modelMapper.map(e, FlatDTO.class))
				.collect(Collectors.toList());
		return flatDTOs;
	}
	
	@Override
	public List<FlatDTO> getBuildingFlat(long bid) {
		List<Flat> buildingFlats=new ArrayList<>();
		List<Flat> flats = flatRepository.findAll();
		for(Flat f:flats) {
			if(f.getBuilding().getId()==bid) {
				buildingFlats.add(f);
			}
		}
		List<FlatDTO> flatDTOs = buildingFlats.stream().map((e) -> modelMapper.map(e, FlatDTO.class))
				.collect(Collectors.toList());
		return flatDTOs;
	}

}
