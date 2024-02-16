package com.app.dto;

public class FlatDTO {

	private int area;

	private int floor;

	private String type;

	private boolean isAvailable;

	private double rent;
	
	private Long buildingId;
	
	private Long userId;

	public FlatDTO() {
		super();
		// TODO Auto-generated constructor stub
	}

	

	public FlatDTO(int area, int floor, String type, boolean isAvailable, double rent, Long buildingId, Long userId) {
		super();
		this.area = area;
		this.floor = floor;
		this.type = type;
		this.isAvailable = isAvailable;
		this.rent = rent;
		this.buildingId = buildingId;
		this.userId = userId;
	}



	public Long getBuildingId() {
		return buildingId;
	}



	public void setBuildingId(Long buildingId) {
		this.buildingId = buildingId;
	}



	public Long getUserId() {
		return userId;
	}



	public void setUserId(Long userId) {
		this.userId = userId;
	}



	public int getArea() {
		return area;
	}

	public void setArea(int area) {
		this.area = area;
	}

	public int getFloor() {
		return floor;
	}

	public void setFloor(int floor) {
		this.floor = floor;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public boolean isAvailable() {
		return isAvailable;
	}

	public void setAvailable(boolean isAvailable) {
		this.isAvailable = isAvailable;
	}

	public double getRent() {
		return rent;
	}

	public void setRent(double rent) {
		this.rent = rent;
	}



	@Override
	public String toString() {
		return "FlatDTO [area=" + area + ", floor=" + floor + ", type=" + type + ", isAvailable=" + isAvailable
				+ ", rent=" + rent + ", buildingId=" + buildingId + ", userId=" + userId + "]";
	}

	
	
	
	
	
}
