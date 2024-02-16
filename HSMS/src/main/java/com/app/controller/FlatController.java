package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dao.FlatRepository;
import com.app.dto.FlatDTO;
import com.app.services.FlatService;

@RestController
@RequestMapping("/flats")
public class FlatController {
	
	@Autowired
	private FlatService flatService;
	
	@PostMapping
	public ResponseEntity<?> addFlat(@RequestBody FlatDTO flatDto){
		try {
			FlatDTO newFlatDto=flatService.addFlat(flatDto);
			if(newFlatDto==null) {
				return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Only a designated Secretary can Add a flat!!");
			}
			return ResponseEntity.status(HttpStatus.CREATED).body(newFlatDto);			
		}catch (Exception e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.getMessage());			
		}
	}
	
	@GetMapping
	public ResponseEntity<?> getAllFlats() {
        //return new ResponseEntity<>(newBuilding, HttpStatus.CREATED);
        return ResponseEntity.status(HttpStatus.OK).body(flatService.getAllFlats());
    }
	
	@GetMapping("/{bid}")
	public ResponseEntity<?> getBuildingFlats(@PathVariable long bid){
		
		return ResponseEntity.status(HttpStatus.OK).body(flatService.getBuildingFlat(bid));
	}

}
