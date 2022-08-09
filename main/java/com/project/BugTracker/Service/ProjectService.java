package com.project.BugTracker.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.project.BugTracker.Entity.ProjectEntity;
import com.project.BugTracker.Exception.ProjectNotFoundException;

@Service
public interface ProjectService {

	public List<ProjectEntity> getAllProject();
	
	public Optional<ProjectEntity> getProject(int id) throws ProjectNotFoundException;
	
	public ProjectEntity addProject(ProjectEntity projectEntity);
	
	public Optional<ProjectEntity> deleteProject(int id) throws ProjectNotFoundException;
	
	public ProjectEntity updateProject(int id, ProjectEntity projectEntity) throws ProjectNotFoundException;
	
}
