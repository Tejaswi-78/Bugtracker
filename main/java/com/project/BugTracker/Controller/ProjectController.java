package com.project.BugTracker.Controller;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.project.BugTracker.Entity.ProjectEntity;
import com.project.BugTracker.Exception.ProjectNotFoundException;
import com.project.BugTracker.Service.ProjectService;

@RestController
public class ProjectController {
	
	@Autowired
	private ProjectService projectServices;
	
	@GetMapping("/project")
	public List<ProjectEntity> getAllLogin() {
		return projectServices.getAllProject();
	}
	
	@GetMapping("project/{id}")
	public Optional<ProjectEntity> getLoginById(@PathVariable int id) throws ProjectNotFoundException {
		return projectServices.getProject(id);
	}
	
	@PostMapping("project")
	public ProjectEntity addLogin(@Valid @RequestBody ProjectEntity projectEntity) {
		return projectServices.addProject(projectEntity);
	}
	
	@PutMapping("project/{id}")
	public ProjectEntity updateLogin(@PathVariable int id,@Valid @RequestBody ProjectEntity projectEntity) throws ProjectNotFoundException {
		return projectServices.updateProject(id, projectEntity);
	}
	
	@DeleteMapping("project/{id}")
	public Optional<ProjectEntity> deleteLogin(@PathVariable int id) throws ProjectNotFoundException {
		return projectServices.deleteProject(id);
	}

}

