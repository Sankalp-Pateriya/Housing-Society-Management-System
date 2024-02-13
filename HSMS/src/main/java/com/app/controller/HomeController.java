package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.FlatDTO;
import com.app.services.BuildingService;
import com.app.services.FlatService;

@RestController
@RequestMapping("/home")
public class HomeController {

	@Autowired
	BuildingService buildingService;

	@Autowired
	FlatService flatService;

/*
	@GetMapping("/{searchElement}/{highArea}/{lowArea}/{type}/{lowRent}/{highRent}")
	public ResponseEntity<?> searchFlats(@PathVariable String searchElement, @PathVariable int highArea,
			@PathVariable int lowArea, @PathVariable String type, @PathVariable int highRent,
			@PathVariable int lowRent) {
		List<FlatDTO> flatList = buildingService.searchFlats(searchElement, type, highArea, lowArea, highRent, lowRent);
		return ResponseEntity.status(HttpStatus.OK).body(flatList);
	}
*/
	
	@GetMapping("/diff")
	public ResponseEntity<?> searchFlatsPost(@RequestParam(required = false, defaultValue = "") String searchElement,
			@RequestParam(required = false, defaultValue = "100000000") int highArea,
			@RequestParam(required = false, defaultValue = "0") int lowArea,
			@RequestParam(required = false, defaultValue = "any") String type,
			@RequestParam(required = false, defaultValue = "100000000") int highRent,
			@RequestParam(required = false, defaultValue = "0") int lowRent) {
		List<FlatDTO> flatList = buildingService.searchFlats(searchElement, type, highArea, lowArea, highRent, lowRent);
		return ResponseEntity.status(HttpStatus.OK).body(flatList);
	}

	@GetMapping
	public ResponseEntity<?> getAllFlats() {
		List<FlatDTO> flatList = flatService.getAllFlats();
		return ResponseEntity.status(HttpStatus.OK).body(flatList);
	}
}
