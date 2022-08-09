package com.project.BugTracker.Service;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.stereotype.Service;

import com.project.BugTracker.Entity.BugEntity;
import com.project.BugTracker.Entity.EmployeeEntity;
import com.project.BugTracker.Exception.EmployeeNotFoundException;

@Service
public interface EmployeeService {

	public List<EmployeeEntity> getAllEmployee();
	
	public Optional<EmployeeEntity> getEmployee(int id) throws EmployeeNotFoundException;
	
	public EmployeeEntity addEmployee(EmployeeEntity employeeEntity);
	
	public Optional<EmployeeEntity> deleteEmployee(int id) throws EmployeeNotFoundException;
	
	public EmployeeEntity updateEmployee(int id, EmployeeEntity employeeEntity) throws EmployeeNotFoundException;

	public EmployeeEntity forwardBug(int id, @Valid BugEntity bugEntity);
	
}
