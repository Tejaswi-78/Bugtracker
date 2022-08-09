package com.project.BugTracker.Controller;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.project.BugTracker.Entity.BugEntity;
import com.project.BugTracker.Entity.EmployeeEntity;
import com.project.BugTracker.Exception.EmployeeNotFoundException;
import com.project.BugTracker.Service.EmployeeService;

@RestController
public class FinalEmployeeController {


	@Autowired
	private EmployeeService employeeServices;
	
	@PutMapping("forward-bug/{empid}")
	public EmployeeEntity updateLogin(@PathVariable int empid,@Valid @RequestBody EmployeeEntity employeeEntity) throws EmployeeNotFoundException {
		return employeeServices.updateEmployee(empid, employeeEntity);
	}
	
	@GetMapping("get-employee-bugs/{empid}")
	public List<BugEntity> getLoginById(@PathVariable int empid) throws EmployeeNotFoundException {
		Optional<EmployeeEntity> empEntity =  employeeServices.getEmployee(empid);
		if(!empEntity.isEmpty()) {
			return (empEntity.get().getBugEntityList());
		}
		else {
			throw new EmployeeNotFoundException("Employee not found with empID "+empid);
		}
	}
}
