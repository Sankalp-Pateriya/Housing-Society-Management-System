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
import com.app.dto.FlatDTO;
import com.app.dto.FlatIdDTO;
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
	User u = userRepository.findById(flatdto.getUserId()).get();
	flat.setUser(u);
	Building building = buildingRepository.findById(flatdto.getBuildingId()).get();
	flat.setBuilding(building);

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
	

}
