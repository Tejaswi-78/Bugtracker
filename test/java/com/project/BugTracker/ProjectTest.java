package com.project.BugTracker;

import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.when;

import java.util.Optional;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import com.project.BugTracker.Entity.ProjectEntity;
import com.project.BugTracker.Exception.ProjectNotFoundException;
import com.project.BugTracker.Service.ProjectService;

@ExtendWith(MockitoExtension.class)
public class ProjectTest {

	@Mock
	ProjectService iProjectService;

	@Test
	void addProjectTest(){
		ProjectEntity projectEntity = new ProjectEntity(1,"Alexa","Automation","speach recognition","Amazon");
		when(iProjectService.addProject(projectEntity)).thenReturn(projectEntity);
		assertEquals(iProjectService.addProject(projectEntity),projectEntity);
	}
	
	@Test
	void getProjectTest() throws ProjectNotFoundException {
		ProjectEntity projectEntity = new ProjectEntity(1,"Alexa","Automation","speach recognition","Amazon");
		Optional<ProjectEntity> OProjectEntity = Optional.of(projectEntity);
		when(iProjectService.getProject(1)).thenReturn(OProjectEntity);
		assertEquals(iProjectService.getProject(1).get(),projectEntity);
	}
	
	@Test
	void updateProjectTest() throws ProjectNotFoundException {
		ProjectEntity projectEntity = new ProjectEntity(1,"Alexa","Automation","speach recognition","Amazon");
		when(iProjectService.updateProject(1,projectEntity)).thenReturn(projectEntity);
		assertEquals(iProjectService.updateProject(1,projectEntity),projectEntity);
	}
	
	@Test
	void deleteProjectTest() throws ProjectNotFoundException {
		ProjectEntity projectEntity = new ProjectEntity(1,"Alexa","Automation","speach recognition","Amazon");
		Optional<ProjectEntity> OProjectEntity = Optional.of(projectEntity);
		when(iProjectService.deleteProject(1)).thenReturn(OProjectEntity);
		assertEquals(iProjectService.deleteProject(1).get(),projectEntity);
	}

}
