package com.project.BugTracker.ServiceImpl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.BugTracker.DAO.ProjectRepository;
import com.project.BugTracker.Entity.ProjectEntity;
import com.project.BugTracker.Exception.ProjectNotFoundException;
import com.project.BugTracker.Service.ProjectService;

@Service
public class ProjectServiceImpl implements ProjectService {

	@Autowired
	private ProjectRepository projectRepo;
	
	@Override
	public List<ProjectEntity> getAllProject() {
		return projectRepo.findAll();
	}

	@Override
	public Optional<ProjectEntity> getProject(int id) throws ProjectNotFoundException {
		try {
			Optional<ProjectEntity> projectData = projectRepo.findById(id);
			if(!projectData.isEmpty()) {
				return projectRepo.findById(id);
			}
			else {
				throw new ProjectNotFoundException("Project Data not found");
			}
		}
		catch(Exception e){
			throw new ProjectNotFoundException("Project Data not found");
		}	
	}

	@Override
	public ProjectEntity addProject(ProjectEntity projectEntity) {
		// TODO Auto-generated method stub
		return projectRepo.save(projectEntity);
	}

	@Override
	public Optional<ProjectEntity> deleteProject(int id) throws ProjectNotFoundException {

		try {
			Optional<ProjectEntity> projectData = projectRepo.findById(id);
			if(!projectData.isEmpty()) {
				projectRepo.deleteById(id);
				return projectData;
			}
			else {
				throw new ProjectNotFoundException("Project Data not found");
			}
		}
		catch(Exception e){
			throw new ProjectNotFoundException("Project Data not found");
		}
	}

	@Override
	public ProjectEntity updateProject(int id, ProjectEntity projectEntity) throws ProjectNotFoundException {
		try {
			Optional<ProjectEntity> projectData = projectRepo.findById(id);
			if(!projectData.isEmpty()) {
				projectEntity.setProjectId(id);
				return projectRepo.save(projectEntity);
			}
			else {
				throw new ProjectNotFoundException("Project Data not found");
			}
		}
		catch(Exception e){
			throw new ProjectNotFoundException("Project Data not found");
		}	
	}
	

}
