package com.app.dto;


public class BuildingDTO {

    private String address;
    private String name;
    private int numberOfFlats;
    private Long userId;

    public BuildingDTO() {
    }

    public BuildingDTO(String address, String name, int numberOfFlats, Long userId) {
        this.address = address;
        this.name = name;
        this.numberOfFlats = numberOfFlats;
        this.userId = userId;
    }

    // Getters and setters
    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
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

	@Override
	public String toString() {
		return "BuildingDTO [address=" + address + ", name=" + name + ", numberOfFlats=" + numberOfFlats + ", userId="
				+ userId + "]";
	}
    
    
}
