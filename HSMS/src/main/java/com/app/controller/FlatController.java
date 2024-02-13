package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.FlatDTO;
import com.app.services.FlatService;

@RestController
@RequestMapping("/flats")
public class FlatController {
	
	@Autowired
	private FlatService flatService;
	
	@PostMapping
	public ResponseEntity<?> addFlat(@RequestBody FlatDTO flatDto){
		FlatDTO flatdto=flatService.addFlat(flatDto);
		return ResponseEntity.status(HttpStatus.CREATED).body(flatdto);
	}
	
	@GetMapping
	public ResponseEntity<?> getAllFlats() {
        //return new ResponseEntity<>(newBuilding, HttpStatus.CREATED);
        return ResponseEntity.status(HttpStatus.OK).body(flatService.getAllFlats());
    }

}
