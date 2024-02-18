package com.app.pojos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.Min;

@Entity
@Table(name = "flats")
public class Flat {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;


    @Column(name = "area")
    @Min(value = 1, message = "Area must be greater than or equal to 1")
    private int area;

    @Column(name = "floor")
    @Min(value = 1, message = "Floor must be greater than or equal to 1")
    private int floor;

    @Column(name = "type")
    private String type;

    @Column(name = "is_available")
    private boolean isAvailable;

    @Column(name = "rent")
    private double rent;
    
    @Column(name = "Tenant")
    private long user_id;

    @ManyToOne
    @JoinColumn(name = "building_id", referencedColumnName = "id")
    private Building building;

    @ManyToOne
    @JoinColumn(name = "user_owner_id", referencedColumnName = "id")
    private User user;

	public Flat() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Flat(@Min(value = 1, message = "Area must be greater than or equal to 1") int area,
			@Min(value = 1, message = "Floor must be greater than or equal to 1") int floor, String type,
			boolean isAvailable, double rent) {
		super();
		this.area = area;
		this.floor = floor;
		this.type = type;
		this.isAvailable = isAvailable;
		this.rent = rent;
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

	public Building getBuilding() {
		return building;
	}

	public void setBuilding(Building building) {
		this.building = building;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}
	
	

	public long getUser_id() {
		return user_id;
	}

	public void setUser_id(long user_id) {
		this.user_id = user_id;
	}

	@Override
	public String toString() {
		return "Flat [id=" + id + ", area=" + area + ", floor=" + floor + ", type=" + type + ", isAvailable="
				+ isAvailable + ", rent=" + rent + ", buildingID=" + building.getId() + ", userID=" + user.getId() + "]";
	}

    // Constructors, getters, setters, and equals()/hashCode()
    
    
    
    
}
