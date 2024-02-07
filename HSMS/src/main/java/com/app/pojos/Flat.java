package com.app.pojos;

import javax.persistence.*;
import javax.validation.constraints.*;

import java.math.BigDecimal;

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
    private BigDecimal rent;

    @ManyToOne
    @JoinColumn(name = "building_id", referencedColumnName = "id", insertable = false, updatable = false)
    private Building building;

    @ManyToOne
    @JoinColumn(name = "user_id", referencedColumnName = "id", insertable = false, updatable = false)
    private User user;

	public Flat() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Flat(@Min(value = 1, message = "Area must be greater than or equal to 1") int area,
			@Min(value = 1, message = "Floor must be greater than or equal to 1") int floor, String type,
			boolean isAvailable, BigDecimal rent) {
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

	public BigDecimal getRent() {
		return rent;
	}

	public void setRent(BigDecimal rent) {
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

	@Override
	public String toString() {
		return "Flat [id=" + id + ", area=" + area + ", floor=" + floor + ", type=" + type + ", isAvailable="
				+ isAvailable + ", rent=" + rent + ", building=" + building + ", user=" + user + "]";
	}

    // Constructors, getters, setters, and equals()/hashCode()
    
    
    
    
}
