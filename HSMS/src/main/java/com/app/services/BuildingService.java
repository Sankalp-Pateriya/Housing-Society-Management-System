package com.app.services;

import java.util.List;

import com.app.dto.BuildingDTO;
import com.app.dto.FlatDTO;
import com.app.pojos.Building;
import com.app.pojos.Flat;


public interface BuildingService {
	BuildingDTO addBuilding(BuildingDTO buildingDTO);
	List<BuildingDTO> getAllBuilding();
	List<FlatDTO> searchFlats(String element, String type, int highArea, int lowArea,int highRent,int lowRent);
//	List<FlatDTO> getAllFlats();
	String deleteBuilding(Long buildingId);

}

