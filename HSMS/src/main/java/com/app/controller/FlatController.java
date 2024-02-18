package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.BuildingIdDTO;
import com.app.dto.FlatDTO;
import com.app.dto.FlatIdDTO;
import com.app.dto.UserIdDTO;
import com.app.services.BuildingService;
import com.app.services.FlatService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/flats")
public class FlatController {

	@Autowired
	private FlatService flatService;

	@Autowired
	private BuildingService buildingService;

	@GetMapping("/flatNbuilding/{id}")
	public ResponseEntity<?> getflatNBuilding(@PathVariable Long id) {
		try {
			System.out.println();
			System.out.println("get Flat N Building method is getting called!!	");
			System.out.println();
			List<List<Object>> buildingNflat = flatService.getflatNBuilding(id);
			System.out.println();
			System.out.println("list of flat and building "+buildingNflat);
			System.out.println();
			return ResponseEntity.status(HttpStatus.CREATED).body(buildingNflat);
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.getMessage());
		}
	}
	
	
	@GetMapping("/addFlat")
	public ResponseEntity<?> getUsersOnly() {
		try {
			List<UserIdDTO> userIdDTOs = flatService.getUsersOnly();
			return ResponseEntity.status(HttpStatus.CREATED).body(userIdDTOs);
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.getMessage());
		}
	}

	@PostMapping("/addFlat")
	public ResponseEntity<?> addFlat(@RequestBody FlatDTO flatDto) {
		try {
			FlatDTO newFlatDto = flatService.addFlat(flatDto);
			if (newFlatDto == null) {
				return ResponseEntity.status(HttpStatus.BAD_REQUEST)
						.body("Only a designated Secretary can Add a flat!!");
			}
			return ResponseEntity.status(HttpStatus.CREATED).body(newFlatDto);
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.getMessage());
		}
	}

	// api to get the flat info by ID
	@GetMapping("/{id}")
	public ResponseEntity<?> getSingleFlats(@PathVariable Long id) {
		// return new ResponseEntity<>(newBuilding, HttpStatus.CREATED);
		System.out.println();
		System.out.println("                   " + id);
		System.out.println();
		try {
			FlatIdDTO flatDTO = flatService.getSingleFlats(id);
			if (flatDTO == null) {
				return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Invalid ID");
			}
			System.out.println();
			System.out.println("                   " + flatDTO);
			System.out.println();
			return ResponseEntity.status(HttpStatus.OK).body(flatDTO);
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("error");
		}
	}

	// api to update the details of the flat
	@PutMapping("/{id}/{uid}")
	public ResponseEntity<?> bookFlat(@PathVariable Long id,@PathVariable Long uid) {
		try {
			
			FlatIdDTO bookFlat = flatService.bookFlat(id,uid);
			if (bookFlat == null) {
				return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Flat is Already Booked!");
			}
			return ResponseEntity.status(HttpStatus.OK).body(bookFlat);
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("error");
		}
	}

	// api to get all flats
	@GetMapping("/allFlats")
	public ResponseEntity<?> allFlats() {
		List<FlatIdDTO> allFlats = flatService.getAllFlats();
		System.out.println();
		System.out.println(" all Flat list : "+allFlats);
		System.out.println();
		return new ResponseEntity<>(allFlats, HttpStatus.OK);

	}

	// api to get all building details for the Dropdown list in the add flat form
	@GetMapping("/buildingDtls")
	public ResponseEntity<?> getAllBuildingDtls() {
		List<BuildingIdDTO> buildingDtls = buildingService.getAllBuildingDtls();
		return new ResponseEntity<>(buildingDtls, HttpStatus.OK);
	}

	@GetMapping("/buildingFlats/{bid}")
	public ResponseEntity<?> getBuildingFlats(@PathVariable String bid) {
		long building_id = Long.parseLong(bid);
		List<FlatIdDTO> flatsdto = flatService.getBuildingflats(building_id);
		System.out.println("All building Flats-----" + flatsdto);
		return ResponseEntity.status(HttpStatus.OK).body(flatsdto);
	}
	
	@GetMapping("/city/{city}")
	public ResponseEntity<?> getFlatCity(@PathVariable String city) {
		List<FlatIdDTO> allFlats = flatService.getCityFlat(city);
		return new ResponseEntity<>(allFlats, HttpStatus.OK);

	}
	
	@GetMapping("/userFlats/{uid}")
	public ResponseEntity<?> getUserFlats(@PathVariable String uid) {
		long user_id = Long.parseLong(uid);
		List<FlatIdDTO> allFlats = flatService.getUserFlat(user_id);
		return new ResponseEntity<>(allFlats, HttpStatus.OK);

	}
	

}
