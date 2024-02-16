package com.app.dto;

public class BuildingIdDTO 
{
	private Long id;
	private String name;
    private int numberOfFlats;
    private Long userId;
    String line_1;
    String line_2;
    String city;
    String pinCode;
    String state;
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
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
		return line_1;
	}
	public void setLine_1(String line_1) {
		this.line_1 = line_1;
	}
	public String getLine_2() {
		return line_2;
	}
	public void setLine_2(String line_2) {
		this.line_2 = line_2;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public String getPinCode() {
		return pinCode;
	}
	public void setPinCode(String pinCode) {
		this.pinCode = pinCode;
	}
	public String getState() {
		return state;
	}
	public void setState(String state) {
		this.state = state;
	}
	@Override
	public String toString() {
		return "BuildingIdDTO [id=" + id + ", name=" + name + ", numberOfFlats=" + numberOfFlats + ", userId=" + userId
				+ ", line_1=" + line_1 + ", line_2=" + line_2 + ", city=" + city + ", pinCode=" + pinCode + ", state="
				+ state + "]";
	}
	public BuildingIdDTO() {
		super();
		// TODO Auto-generated constructor stub
	}
	public BuildingIdDTO(Long id, String name, int numberOfFlats, Long userId, String line_1, String line_2,
			String city, String pinCode, String state) {
		super();
		this.id = id;
		this.name = name;
		this.numberOfFlats = numberOfFlats;
		this.userId = userId;
		this.line_1 = line_1;
		this.line_2 = line_2;
		this.city = city;
		this.pinCode = pinCode;
		this.state = state;
	}
}
