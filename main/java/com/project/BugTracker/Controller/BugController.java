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

import com.project.BugTracker.Entity.BugEntity;
import com.project.BugTracker.Exception.BugNotFoundException;
import com.project.BugTracker.Service.BugService;

@RestController
public class BugController {
	
	@Autowired
	private BugService bugServices;
	
	@GetMapping("/bug")
	public List<BugEntity> getAllBug() {
		return bugServices.getAllBug();
	}
	
	@GetMapping("bug/{id}")
	public Optional<BugEntity> getBugById(@PathVariable int id) throws BugNotFoundException {
		return bugServices.getBug(id);
	}
	
	@PostMapping("bug")
	public BugEntity addBug(@Valid @RequestBody BugEntity bugEntity) {
		return bugServices.addBug(bugEntity);
	}
	
	@PutMapping("bug/{id}")
	public BugEntity updateBug(@PathVariable int id,@Valid @RequestBody BugEntity bugEntity) throws BugNotFoundException {
		return bugServices.updateBug(id, bugEntity);
	}
	
	@DeleteMapping("bug/{id}")
	public Optional<BugEntity> deleteBug(@PathVariable int id) throws BugNotFoundException {
		return bugServices.deleteBug(id);
	}

}
