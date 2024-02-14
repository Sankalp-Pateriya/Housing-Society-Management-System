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
import com.app.pojos.Flat;
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
	
	@GetMapping("/{id}")
	public ResponseEntity<?> getSingleFlats(Long id) {
        //return new ResponseEntity<>(newBuilding, HttpStatus.CREATED);
		System.out.println();
		System.out.println("                   "+id);
		System.out.println();
		try {
			FlatDTO flatDTO = flatService.getSingleFlats(id);
			if(flatDTO== null) {
				return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Invalid ID");
			}
			System.out.println();
			System.out.println("                   "+flatDTO);
			System.out.println();
			return ResponseEntity.status(HttpStatus.OK).body(flatDTO);
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("error");
		}   
    }

}
