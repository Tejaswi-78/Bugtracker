package com.project.BugTracker.Controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.project.BugTracker.Entity.BugEntity;
import com.project.BugTracker.Exception.BugNotFoundException;
import com.project.BugTracker.Service.BugService;

@RestController
public class FinalUserController {
	
	@Autowired
	private BugService bugServices;
	
	@GetMapping("get-bug-description/{id}")
	public String getBugDescById(@PathVariable int id) throws BugNotFoundException {
		Optional<BugEntity> bugEntity = bugServices.getBug(id);
		if(!bugEntity.isEmpty()) {
			return(bugEntity.get().getDescription());
		}
		else {
			throw new BugNotFoundException("Bug not found with id "+id);
		}
	}
	
	@GetMapping("get-bug-status/{id}")
	public String getBugStatusById(@PathVariable int id) throws BugNotFoundException {
		Optional<BugEntity> bugEntity = bugServices.getBug(id);
		if(!bugEntity.isEmpty()) {
			return(bugEntity.get().getBugStatus());
		}
		else {
			throw new BugNotFoundException("Bug not found with id "+id);
		}
	}
	
	

}
