package com.app.dto;

public class FlatComponentDTO {

	Long id;
	double rent;
	int floorNumber;
	String buildingName;
	String flatType;
	String Line_1;

	String Line_2;

	String City;

	String pinCode;

	String State;

	// Constructors, getters, setters, etc.

	public FlatComponentDTO(Long id, double rent, int floorNumber, String buildingName,
			String flatType, String line_1, String line_2, String city, String pINCode, String state) {
		super();
		this.id = id;
		this.rent = rent;
		this.floorNumber = floorNumber;
		this.buildingName = buildingName;
		this.flatType = flatType;
		Line_1 = line_1;
		Line_2 = line_2;
		City = city;
		pinCode = pINCode;
		State = state;
	}

	public FlatComponentDTO() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getPinCode() {
		return pinCode;
	}

	public void setPinCode(String pinCode) {
		this.pinCode = pinCode;
	}

	public String getLine_1() {
		return Line_1;
	}

	public void setLine_1(String line_1) {
		Line_1 = line_1;
	}

	public String getLine_2() {
		return Line_2;
	}

	public void setLine_2(String line_2) {
		Line_2 = line_2;
	}

	public String getCity() {
		return City;
	}

	public void setCity(String city) {
		City = city;
	}

	public String getPINCode() {
		return pinCode;
	}

	public void setPINCode(String string) {
		pinCode = string;
	}

	public String getState() {
		return State;
	}

	public void setState(String state) {
		State = state;
	}

	public double getRent() {
		return rent;
	}

	public void setRent(double rent) {
		this.rent = rent;
	}

	public int getFloorNumber() {
		return floorNumber;
	}

	public void setFloorNumber(int floorNumber) {
		this.floorNumber = floorNumber;
	}

	public String getBuildingName() {
		return buildingName;
	}

	public void setBuildingName(String buildingName) {
		this.buildingName = buildingName;
	}

	public String getFlatType() {
		return flatType;
	}

	public void setFlatType(String flatType) {
		this.flatType = flatType;
	}

	@Override
	public String toString() {
		return "FlatComponentDTO [id=" + id + ", rent=" + rent + ", floorNumber=" + floorNumber + ", buildingName="
				+ buildingName + ", flatType=" + flatType + ", Line_1=" + Line_1 + ", Line_2=" + Line_2 + ", City="
				+ City + ", pinCode=" + pinCode + ", State=" + State + "]";
	}
	
	
	
	

}
