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
import com.project.BugTracker.Entity.EmployeeEntity;
import com.project.BugTracker.Exception.EmployeeNotFoundException;
import com.project.BugTracker.Service.EmployeeService;

@RestController
public class EmployeeController {
	
	@Autowired
	private EmployeeService employeeServices;
	
	@GetMapping("/employee")
	public List<EmployeeEntity> getAllEmployee() {
		return employeeServices.getAllEmployee();
	}
	
	@GetMapping("employee/{id}")
	public Optional<EmployeeEntity> getEmployeeById(@PathVariable int id) throws EmployeeNotFoundException {
		return employeeServices.getEmployee(id);
	}
	
	@PostMapping("employee")
	public EmployeeEntity addEmployee(@Valid @RequestBody EmployeeEntity employeeEntity) {
		return employeeServices.addEmployee(employeeEntity);
	}
	
	@PutMapping("employee/{id}")
	public EmployeeEntity updateEmployee(@PathVariable int id,@Valid @RequestBody EmployeeEntity employeeEntity) throws EmployeeNotFoundException {
		return employeeServices.updateEmployee(id, employeeEntity);
	}
	
	@PutMapping("forward_bug/{id}")
	public EmployeeEntity forwardBug(@PathVariable int id,@Valid @RequestBody BugEntity bugEntity) throws EmployeeNotFoundException {
		return employeeServices.forwardBug(id, bugEntity);
	}
	
	@DeleteMapping("employee/{id}")
	public Optional<EmployeeEntity> deleteEmployee(@PathVariable int id) throws EmployeeNotFoundException {
		return employeeServices.deleteEmployee(id);
	}

}

