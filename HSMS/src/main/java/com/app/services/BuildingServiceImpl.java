package com.app.services;


import com.app.dao.BuildingRepository;
import com.app.dao.UserRepository;
import com.app.dto.BuildingDTO;
import com.app.pojos.Building;
import com.app.pojos.User;

import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BuildingServiceImpl implements BuildingService {

    private final BuildingRepository buildingRepository;
    
    private final ModelMapper modelMapper;
    
    @Autowired
    public UserRepository userRespository;
    
    @Autowired
    public BuildingServiceImpl(BuildingRepository buildingRepository) {
        this.buildingRepository = buildingRepository;
        this.modelMapper = new ModelMapper();
    }

    @Override
    public BuildingDTO addBuilding(BuildingDTO buildingDTO) {
    	Optional<User> user=userRespository.findById(buildingDTO.getUserId());
    	Building newBuilding=modelMapper.map(buildingDTO, Building.class);
    	newBuilding.setUser(user.get());
    	System.out.println("NewBuilding:"+newBuilding);
    	System.out.println("Owner:"+newBuilding.getUser());
    	buildingRepository.save(newBuilding);
        return buildingDTO;
    }
}

