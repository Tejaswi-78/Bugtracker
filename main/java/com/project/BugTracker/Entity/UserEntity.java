package com.project.BugTracker.Entity;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.validation.constraints.NotNull;

@Entity
public class UserEntity {
	
	@Id
	private int id;
	
	@NotNull(message = "firstName is mandatory")
	private String firstName;
	
	@NotNull(message = "LastName is mandatory")
	private String LastName;

	@OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "addressId", referencedColumnName = "id")
	private AddressEntity addressEntity;
	
	@OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "loginId", referencedColumnName = "email")
	private LoginEntity login;
	
	@Override
	public String toString() {
		return "UserEntity [id=" + id + ", firstName=" + firstName + ", LastName=" + LastName + "]";
	}
	
	public UserEntity(int id, @NotNull(message = "firstName is mandatory") String firstName,
			@NotNull(message = "LastName is mandatory") String lastName) {
		super();
		this.id = id;
		this.firstName = firstName;
		LastName = lastName;
	}

	public UserEntity() {
		super();
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return LastName;
	}

	public void setLastName(String lastName) {
		LastName = lastName;
	}

	public AddressEntity getAddressEntity() {
		return addressEntity;
	}

	public void setAddressEntity(AddressEntity addressEntity) {
		this.addressEntity = addressEntity;
	}

	public LoginEntity getLogin() {
		return login;
	}

	public void setLogin(LoginEntity login) {
		this.login = login;
	}
	
	
	
}
