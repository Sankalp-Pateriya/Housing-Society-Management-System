package com.app.services;

import java.util.List;

import com.app.dto.BuildingDTO;
import com.app.pojos.Building;


public interface BuildingService {
	BuildingDTO addBuilding(BuildingDTO buildingDTO);

	List<BuildingDTO> getAllBuilding();
}

