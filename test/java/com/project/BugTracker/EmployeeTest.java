package com.project.BugTracker;

import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.when;

import java.util.Optional;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import com.project.BugTracker.Entity.EmployeeEntity;
import com.project.BugTracker.Exception.EmployeeNotFoundException;
import com.project.BugTracker.Service.EmployeeService;

@ExtendWith(MockitoExtension.class)
public class EmployeeTest {

	@Mock
	EmployeeService iEmployeeService;

	@Test
	void addEmployeeTest(){
		EmployeeEntity employeeEntity = new EmployeeEntity(1,"mahii","ch","SDE-3");
		when(iEmployeeService.addEmployee(employeeEntity)).thenReturn(employeeEntity);
		assertEquals(iEmployeeService.addEmployee(employeeEntity),employeeEntity);
	}
	
	@Test
	void getEmployeeTest() throws EmployeeNotFoundException {
		EmployeeEntity employeeEntity = new EmployeeEntity(1,"mahii","ch","SDE-3");
		Optional<EmployeeEntity> OEmployeeEntity = Optional.of(employeeEntity);
		when(iEmployeeService.getEmployee(1)).thenReturn(OEmployeeEntity);
		assertEquals(iEmployeeService.getEmployee(1).get(),employeeEntity);
	}
	
	@Test
	void updateEmployeeTest() throws EmployeeNotFoundException {
		EmployeeEntity employeeEntity = new EmployeeEntity(1,"mahii","ch","SDE-3");
		when(iEmployeeService.updateEmployee(1,employeeEntity)).thenReturn(employeeEntity);
		assertEquals(iEmployeeService.updateEmployee(1,employeeEntity),employeeEntity);
	}
	
	@Test
	void deleteEmployeeTest() throws EmployeeNotFoundException {
		EmployeeEntity employeeEntity = new EmployeeEntity(1,"mahii","ch","SDE-3");
		Optional<EmployeeEntity> OEmployeeEntity = Optional.of(employeeEntity);
		when(iEmployeeService.deleteEmployee(1)).thenReturn(OEmployeeEntity);
		assertEquals(iEmployeeService.deleteEmployee(1).get(),employeeEntity);
	}

}
