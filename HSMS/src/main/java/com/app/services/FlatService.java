package com.app.services;

import java.util.List;

import com.app.dto.FlatDTO;
import com.app.dto.FlatIdDTO;
import com.app.dto.UserIdDTO;

public interface FlatService {
	FlatDTO addFlat(FlatDTO flatdto);
	List<FlatIdDTO> getAllFlats();
	FlatIdDTO getSingleFlats(Long id);
	FlatIdDTO bookFlat(Long id,Long uid);
	List<FlatIdDTO> getBuildingflats(long bid);
	List<UserIdDTO> getUsersOnly();
	List<FlatIdDTO> getCityFlat(String city);
	List<FlatIdDTO> getUserFlat(long user_id);
	List<List<Object>> getflatNBuilding(Long id);

}
