package com.app.dto;

public class BuildingDTO {

	private String name;
	private int numberOfFlats;
	private Long userId;
	String Line_1;

	String Line_2;

	String City;

	int PINCode;

	String State;

	public BuildingDTO() {
	}

	public BuildingDTO(String name, int numberOfFlats, Long userId, String line_1, String line_2, String city,
			int pINCode, String state) {
		super();

		this.name = name;
		this.numberOfFlats = numberOfFlats;
		this.userId = userId;
		Line_1 = line_1;
		Line_2 = line_2;
		City = city;
		PINCode = pINCode;
		State = state;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getNumberOfFlats() {
		return numberOfFlats;
	}

	public void setNumberOfFlats(int numberOfFlats) {
		this.numberOfFlats = numberOfFlats;
	}

	public Long getUserId() {
		return userId;
	}

	public void setUserId(Long userId) {
		this.userId = userId;
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

	public int getPINCode() {
		return PINCode;
	}

	public void setPINCode(int pINCode) {
		PINCode = pINCode;
	}

	public String getState() {
		return State;
	}

	public void setState(String state) {
		State = state;
	}

	@Override
	public String toString() {
		return "BuildingDTO [ name=" + name + ", numberOfFlats=" + numberOfFlats + ", userId=" + userId + ", Line_1="
				+ Line_1 + ", Line_2=" + Line_2 + ", City=" + City + ", PINCode=" + PINCode + ", State=" + State + "]";
	}

}
