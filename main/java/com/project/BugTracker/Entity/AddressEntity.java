package com.project.BugTracker.Entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.validation.constraints.NotNull;

@Entity
public class AddressEntity {
	
	@Id
	@SequenceGenerator(name="ADD_SEQ_GEN", sequenceName="ADD_SEQ_GEN", allocationSize=1)
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator="ADD_SEQ_GEN")
	private int id;
	
	@NotNull(message = "city is mandatory")
	private String city;
	
	@NotNull(message = "state is mandatory")
	private String state;
	
	@NotNull(message = "pincode is mandatory")
	private int pincode;

	public AddressEntity() {
		super();
	}

	public AddressEntity(int id, @NotNull(message = "city is mandatory") String city,
			@NotNull(message = "state is mandatory") String state,
			@NotNull(message = "pincode is mandatory") int pincode) {
		super();
		this.id = id;
		this.city = city;
		this.state = state;
		this.pincode = pincode;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public int getPincode() {
		return pincode;
	}

	public void setPincode(int pincode) {
		this.pincode = pincode;
	}

	@Override
	public String toString() {
		return "AddressEntity [id=" + id + ", city=" + city + ", state=" + state + ", pincode=" + pincode + "]";
	}
	
	
}
