package com.app.services;

import java.util.List;

import com.app.dto.FlatDTO;

public interface FlatService {

	FlatDTO addFlat(FlatDTO flatDto);

	List<FlatDTO> getAllFlats();



}
