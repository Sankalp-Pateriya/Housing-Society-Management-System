package com.app.services;

import java.util.List;

import com.app.dto.BuildingDTO;
import com.app.dto.BuildingIdDTO;
import com.app.dto.BuildingNameAndIdDTO;
import com.app.dto.FlatDTO;


public interface BuildingService {
	BuildingDTO addBuilding(BuildingDTO buildingDTO);
	List<FlatDTO> searchFlats(String element, String type, int highArea, int lowArea,int highRent,int lowRent);
	List<BuildingIdDTO> getAllBuilding();
	
	List<BuildingIdDTO> getAllBuildingDtls();
	List<List<Object>> getAllBuildingsNFlats();
	List<List<Object>> getFlatsOfBuilding(Long bId);
}

