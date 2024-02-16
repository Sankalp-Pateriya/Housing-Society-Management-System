package com.app.dto;

public class FlatIdDTO 
{
	private Long id;
	
	private int area;

	private int floor;

	private String type;

	private boolean isAvailable;

	private double rent;
	
	private Long buildingId;
	
	private Long userId;

	public FlatIdDTO() {
		super();
		// TODO Auto-generated constructor stub
	}

	public FlatIdDTO(Long id, int area, int floor, String type, boolean isAvailable, double rent, Long buildingId,
			Long userId) {
		super();
		this.id = id;
		this.area = area;
		this.floor = floor;
		this.type = type;
		this.isAvailable = isAvailable;
		this.rent = rent;
		this.buildingId = buildingId;
		this.userId = userId;
	}

	@Override
	public String toString() {
		return "FlatIdDTO [id=" + id + ", area=" + area + ", floor=" + floor + ", type=" + type + ", isAvailable="
				+ isAvailable + ", rent=" + rent + ", buildingId=" + buildingId + ", userId=" + userId + "]";
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
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
}
