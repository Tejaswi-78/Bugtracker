package com.project.BugTracker.Entity;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.SequenceGenerator;
import javax.validation.constraints.NotNull;


import lombok.Data;

@Entity
public class ProjectEntity {
	
	@Id
	@SequenceGenerator(name="PROJECT_SEQ_GEN", sequenceName="PROJECT_SEQ_GEN", allocationSize=1)
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator="PROJECT_SEQ_GEN")
	@NotNull(message = "projectId is mandatory")
	private int projectId;
	
	@NotNull(message = "projectName is mandatory")
	private String projectName;
	
	@NotNull(message = "projectType is mandatory")
	private String projectType;
	
	@NotNull(message = "technology is mandatory")
	private String technology;
	
	@NotNull(message = "client is mandatory")
	private String client;
	
	@OneToMany(targetEntity = BugEntity.class, cascade = CascadeType.ALL)
	@JoinColumn(name="projectId",referencedColumnName="projectId")
	private List<BugEntity> bugs;
	
	public ProjectEntity() {
		super();
	}

	public ProjectEntity(@NotNull(message = "projectId is mandatory") int projectId,
			@NotNull(message = "projectName is mandatory") String projectName,
			@NotNull(message = "projectType is mandatory") String projectType,
			@NotNull(message = "technology is mandatory") String technology,
			@NotNull(message = "client is mandatory") String client) {
		super();
		this.projectId = projectId;
		this.projectName = projectName;
		this.projectType = projectType;
		this.technology = technology;
		this.client = client;
	}

	public int getProjectId() {
		return projectId;
	}

	public void setProjectId(int projectId) {
		this.projectId = projectId;
	}

	public String getProjectName() {
		return projectName;
	}

	public void setProjectName(String projectName) {
		this.projectName = projectName;
	}

	public String getProjectType() {
		return projectType;
	}

	public void setProjectType(String projectType) {
		this.projectType = projectType;
	}

	public String getTechnology() {
		return technology;
	}

	public void setTechnology(String technology) {
		this.technology = technology;
	}

	public String getClient() {
		return client;
	}

	public void setClient(String client) {
		this.client = client;
	}

	@Override
	public String toString() {
		return "ProjectEntity [projectId=" + projectId + ", projectName=" + projectName + ", projectType=" + projectType
				+ ", technology=" + technology + ", client=" + client + "]";
	}

	public List<BugEntity> getBugs() {
		return bugs;
	}

	public void setBugs(List<BugEntity> bugs) {
		this.bugs = bugs;
	}
	
	
}
