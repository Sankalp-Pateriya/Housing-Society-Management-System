package com.app.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.BuildingRepository;
import com.app.dao.FlatRepository;
import com.app.dao.UserRepository;
import com.app.dto.BuildingDTO;
import com.app.dto.FlatDTO;
import com.app.exception.NotFoundException;
import com.app.pojos.Building;
import com.app.pojos.Flat;
import com.app.pojos.User;

@Service
@Transactional
public class BuildingServiceImpl implements BuildingService {

	@Autowired
	BuildingRepository buildingRepository;

	@Autowired
	FlatRepository flatRepository;

	@Autowired
	ModelMapper modelMapper;

	@Autowired
	public UserRepository userRespository;

	@Override
	public BuildingDTO addBuilding(BuildingDTO buildingDTO) {

		Optional<User> userById = userRespository.findById(buildingDTO.getUserId());
//    	System.out.println("0");
		User user = userById.get();
		if (user != null) {
			if (!user.getRole().toString().equals("ADMIN")) {
				return null;
			}
		}
		Building newBuilding = modelMapper.map(buildingDTO, Building.class);
		newBuilding.setUser(user);
		System.out.println("NewBuilding:" + newBuilding);
		System.out.println("Owner:" + newBuilding.getUser());
		buildingRepository.save(newBuilding);
		return buildingDTO;
	}

	@Override
	public List<BuildingDTO> getAllBuilding() {
		List<Building> buildings = buildingRepository.findAll();
		List<BuildingDTO> buildingDTOs = new ArrayList<>();
		for (Building b : buildings) {
			buildingDTOs.add(modelMapper.map(b, BuildingDTO.class));
			buildingDTOs.forEach((e)->e.setUserId(b.getUser().getId()));
		}
		return buildingDTOs;
	}

	public List<FlatDTO> searchFlats(String element, String type, int highArea, int lowArea, int highRent,
			int lowRent) {
		System.out.println();
		System.out.println(element);
		System.out.println();
		List<FlatDTO> flatDTOs = new ArrayList<FlatDTO>();
		List<Building> buildings = buildingRepository.findAll();

		System.out.println();
		System.out.println(buildings);
		System.out.println();
		List<Building> areaBuildings = new ArrayList<Building>();

		for (Building b : buildings) {
			ArrayList<String> list = new ArrayList<String>();
			list.add(b.getCity().toLowerCase());
			list.add(b.getState().toLowerCase());
			String[] arr1 = b.getLine_1().toLowerCase().split(" ");
			for (String str : arr1) {
				list.add(str);
			}
			list.add("" + b.getPinCode());
			String[] arr2 = b.getLine_2().toLowerCase().split(" ");
			for (String str : arr2) {
				list.add(str);
			}
			for (String str : list) {
				if (str.contains(element.toLowerCase())) {
					areaBuildings.add(b);
					break;
				}
			}
		}

		System.out.println();
		System.out.println(areaBuildings);
		System.out.println();
		for (Building b : areaBuildings) {
			List<Flat> tempList = flatRepository.findByBuildingId(b.getId());
			System.out.println();
			System.out.println(" safsdfsad" + tempList);
			System.out.println();
			List<FlatDTO> convertedTempList = tempList.stream().map((e) -> modelMapper.map(e, FlatDTO.class))
					.filter((e) -> e.isAvailable()).collect(Collectors.toList());
			flatDTOs.addAll(convertedTempList);
			System.out.println();
			System.out.println(" 1 " + flatDTOs);
			System.out.println();
		}
		if (!type.equalsIgnoreCase("any")) {
			if (!type.toLowerCase().equals("any")) {
				flatDTOs = flatDTOs.stream().filter((e) -> {
					return e.getType().toUpperCase().equals(type.toUpperCase());
				}).collect(Collectors.toList());
			}
			System.out.println();
			System.out.println(" 2 " + flatDTOs);
			System.out.println();
		}

		// if (highArea >= lowArea && highArea != 0 && lowArea != 0) {
		flatDTOs = flatDTOs.stream().filter((e) -> {
			return e.getArea() >= lowArea && e.getArea() <= highArea;
		}).collect(Collectors.toList());
		System.out.println();
		System.out.println(" 3 " + flatDTOs);
		System.out.println();
//		}
//		if (highRent >= lowRent && highRent != 0 && lowRent != 0) {
		flatDTOs = flatDTOs.stream().filter((e) -> {
			return e.getRent() >= lowRent && e.getRent() <= highRent;
		}).collect(Collectors.toList());
		System.out.println();
		System.out.println(" 4 " + flatDTOs);
		System.out.println();
//		}
		System.out.println();
		System.out.println(flatDTOs);
		System.out.println();
		return flatDTOs;
	}

	@Override
	public String deleteBuilding(Long buildingId) {
		Building building = buildingRepository.findById(buildingId)
				.orElseThrow(() -> new NotFoundException("No such Building Id exists!"));
		buildingRepository.deleteById(buildingId);
		return "Building Deleted Successfully!";
	}

}
