package com.project.BugTracker.Entity;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.SequenceGenerator;
import javax.validation.constraints.NotNull;

@Entity
public class EmployeeEntity {
	
	@Id
//	@SequenceGenerator(name="EMP_SEQ_GEN", sequenceName="EMP_SEQ_GEN", allocationSize=1)
//	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator="EMP_SEQ_GEN")
	private int id;
	
	@NotNull(message = "firstName is mandatory")
	private String firstName;
	
	@NotNull(message = "lastName is mandatory")
	private String lastName;
	
	@NotNull(message = "designation is mandatory")
	private String designation;

	@OneToMany(targetEntity = BugEntity.class, cascade = CascadeType.ALL)
	@JoinColumn(name="empId",referencedColumnName="id")
	private List<BugEntity> bugEntityList;
	
	@OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "loginId", referencedColumnName = "email")
	private LoginEntity login;
	
	@Override
	public String toString() {
		return "EmployeeEntity [id=" + id + ", firstName=" + firstName + ", lastName=" + lastName + ", designation="
				+ designation + "]";
	}

	public EmployeeEntity(int id, @NotNull(message = "firstName is mandatory") String firstName,
			@NotNull(message = "lastName is mandatory") String lastName,
			@NotNull(message = "designation is mandatory") String designation) {
		super();
		this.id = id;
		this.firstName = firstName;
		this.lastName = lastName;
		this.designation = designation;
	}

	public EmployeeEntity() {
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
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getDesignation() {
		return designation;
	}

	public void setDesignation(String designation) {
		this.designation = designation;
	}

	public List<BugEntity> getBugEntityList() {
		return bugEntityList;
	}

	public void setBugEntityList(List<BugEntity> bugEntityList) {
		this.bugEntityList = bugEntityList;
	}

	public LoginEntity getLogin() {
		return login;
	}

	public void setLogin(LoginEntity login) {
		this.login = login;
	}
	
	
}
