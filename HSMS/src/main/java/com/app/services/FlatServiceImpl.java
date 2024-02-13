package com.app.services;


import java.util.List;
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
	Flat flat=modelMapper.map(flatdto, Flat.class);
	Long bid = flatdto.getBuildingId();
	flat.setBuilding(buildingRepository.findById(flatdto.getBuildingId()).get());
	flat.setUser(userRepository.findById(flatdto.getUserId()).get());
	Building building = buildingRepository.findById(bid).get();
	System.out.println(building);
	
	System.out.println("Flat OWner:"+flat.getUser());
	flatRepository.save(flat);
	return flatdto;
	
	}
		
	

	@Override
	public List<FlatDTO> getAllFlats() {
		List<Flat> flats = flatRepository.findAll();
		List<FlatDTO> flatDTOs = flats.stream().map((e)->modelMapper.map(e, FlatDTO.class)).collect(Collectors.toList());
		return flatDTOs;
	}


}
