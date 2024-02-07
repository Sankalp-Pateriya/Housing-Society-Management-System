package com.app.controller;


import com.app.dto.BuildingDTO;
import com.app.pojos.Building;
import com.app.services.BuildingService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/buildings")
public class BuildingController {

    private final BuildingService buildingService;

    @Autowired
    public BuildingController(BuildingService buildingService) {
        this.buildingService = buildingService;
    }

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
    
}
