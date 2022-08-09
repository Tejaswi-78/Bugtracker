package com.project.BugTracker.Controller;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.project.BugTracker.Entity.AdminEntity;
import com.project.BugTracker.Entity.BugEntity;
import com.project.BugTracker.Entity.EmployeeEntity;
import com.project.BugTracker.Entity.ProjectEntity;
import com.project.BugTracker.Exception.BugNotFoundException;
import com.project.BugTracker.Exception.EmployeeNotFoundException;
import com.project.BugTracker.Service.AdminService;
import com.project.BugTracker.Service.BugService;
import com.project.BugTracker.Service.EmployeeService;
import com.project.BugTracker.Service.ProjectService;

//@RestController
public class FinalAdminController {
	
	@Autowired
	private EmployeeService employeeService;
	
	@Autowired
	private ProjectService projectService;
	
	@Autowired
	private BugService bugService;
	
	@Autowired
	private AdminService adminServices;
	
	@PostMapping("add-project")
	public ProjectEntity addLogin(@Valid @RequestBody ProjectEntity projectEntity) {
		return projectService.addProject(projectEntity);
	}
	
	@PostMapping("add-employee")
	public EmployeeEntity addLogin(@Valid @RequestBody EmployeeEntity employeeEntity) {
		return employeeService.addEmployee(employeeEntity);
	}
	
	@GetMapping("get-bug/{id}")
	public Optional<BugEntity> getBugById(@PathVariable int id) throws BugNotFoundException {
		return bugService.getBug(id);
	}
	
	@PutMapping("assign-bug/{empid}")
	public EmployeeEntity updateLogin(@PathVariable int empid,@Valid @RequestBody EmployeeEntity employeeEntity) throws EmployeeNotFoundException {
		return employeeService.updateEmployee(empid, employeeEntity);
	}
	
	@PostMapping("add-admin")
	public AdminEntity addLogin(@Valid @RequestBody AdminEntity adminEntity) {
		return adminServices.addAdmin(adminEntity);
	}
	
	@GetMapping("/view-employees")
	public List<EmployeeEntity> getAllEmplopyee() {
		return employeeService.getAllEmployee();
	}
	
	@GetMapping("/view-project")
	public List<ProjectEntity> getAllLogin() {
		return projectService.getAllProject();
	}
	
}
