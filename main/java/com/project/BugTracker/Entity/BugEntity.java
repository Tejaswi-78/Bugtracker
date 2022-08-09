package com.project.BugTracker.Entity;

import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.validation.constraints.NotNull;

@Entity
public class BugEntity {
	
	@Id
	@SequenceGenerator(name="BUG_SEQ_GEN", sequenceName="BUG_SEQ_GEN", allocationSize=1)
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator="BUG_SEQ_GEN")
	private int id;
	
	@NotNull(message = "bugStatus is mandatory")
	private String bugStatus;
	
	@NotNull(message = "description is mandatory")
	private String description;
	
	@NotNull(message = "createdBy is mandatory")
	private String createdBy;
	
	@NotNull(message = "createdDate is mandatory")
	private LocalDate createdDate;

	@Override
	public String toString() {
		return "BugEntity [id=" + id + ", bugStatus=" + bugStatus + ", description=" + description + ", createdBy="
				+ createdBy + ", createdDate=" + createdDate + "]";
	}

	public BugEntity(int id, @NotNull(message = "bugStatus is mandatory") String bugStatus,
			@NotNull(message = "description is mandatory") String description,
			@NotNull(message = "createdBy is mandatory") String createdBy,
			@NotNull(message = "createdDate is mandatory") LocalDate createdDate) {
		super();
		this.id = id;
		this.bugStatus = bugStatus;
		this.description = description;
		this.createdBy = createdBy;
		this.createdDate = createdDate;
	}

	public BugEntity() {
		super();
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getBugStatus() {
		return bugStatus;
	}

	public void setBugStatus(String bugStatus) {
		this.bugStatus = bugStatus;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getCreatedBy() {
		return createdBy;
	}

	public void setCreatedBy(String createdBy) {
		this.createdBy = createdBy;
	}

	public LocalDate getCreatedDate() {
		return createdDate;
	}

	public void setCreatedDate(LocalDate createdDate) {
		this.createdDate = createdDate;
	}
	
	
	
}
