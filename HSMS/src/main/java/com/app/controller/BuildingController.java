package com.app.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.BuildingDTO;
import com.app.services.BuildingService;

@RestController
@RequestMapping("/buildings")
public class BuildingController {
	
	@Autowired
    BuildingService buildingService;   

    @PostMapping
    public ResponseEntity<?> addBuilding(@RequestBody BuildingDTO building) {
    	BuildingDTO newBuildingDto = buildingService.addBuilding(building);
        //return new ResponseEntity<>(newBuilding, HttpStatus.CREATED);
        return ResponseEntity.status(HttpStatus.CREATED).body(newBuildingDto);

    }
    
    @GetMapping
    public ResponseEntity<?> getAllBuilding(){
    	List<BuildingDTO> buildingDTO=buildingService.getAllBuilding();
    	return ResponseEntity.status(HttpStatus.OK).body(buildingDTO);
    }
    
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteBuilding(@PathVariable Long buildingId){
    	
    	return ResponseEntity.status(HttpStatus.OK).body(buildingService.deleteBuilding(buildingId));
    }
    
}
