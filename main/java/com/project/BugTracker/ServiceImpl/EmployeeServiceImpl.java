package com.project.BugTracker.ServiceImpl;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.BugTracker.DAO.EmployeeRepository;
import com.project.BugTracker.Entity.BugEntity;
import com.project.BugTracker.Entity.EmployeeEntity;
import com.project.BugTracker.Exception.EmployeeNotFoundException;
import com.project.BugTracker.Service.EmployeeService;

@Service
public class EmployeeServiceImpl implements EmployeeService {

	@Autowired
	private EmployeeRepository employeeRepo;
	
	@Override
	public List<EmployeeEntity> getAllEmployee() {
		return employeeRepo.findAll();
	}

	@Override
	public Optional<EmployeeEntity> getEmployee(int id) throws EmployeeNotFoundException {
		try {
			Optional<EmployeeEntity> employeeData = employeeRepo.findById(id);
			if(!employeeData.isEmpty()) {
				return employeeRepo.findById(id);
			}
			else {
				throw new EmployeeNotFoundException("Employee Data not found");
			}
		}
		catch(Exception e){
			throw new EmployeeNotFoundException("Employee Data not found");
		}	
	}

	@Override
	public EmployeeEntity addEmployee(EmployeeEntity employeeEntity) {
		// TODO Auto-generated method stub
		return employeeRepo.save(employeeEntity);
	}

	@Override
	public Optional<EmployeeEntity> deleteEmployee(int id) throws EmployeeNotFoundException {

		try {
			Optional<EmployeeEntity> employeeData = employeeRepo.findById(id);
			if(!employeeData.isEmpty()) {
				employeeRepo.deleteById(id);
				return employeeData;
			}
			else {
				throw new EmployeeNotFoundException("Employee Data not found");
			}
		}
		catch(Exception e){
			throw new EmployeeNotFoundException("Employee Data not found");
		}
	}

	@Override
	public EmployeeEntity updateEmployee(int id, EmployeeEntity employeeEntity) throws EmployeeNotFoundException {
		try {
			Optional<EmployeeEntity> employeeData = employeeRepo.findById(id);
			if(!employeeData.isEmpty()) {
				employeeEntity.setId(id);
				return employeeRepo.save(employeeEntity);
			}
			else {
				throw new EmployeeNotFoundException("Employee Data not found");
			}
		}
		catch(Exception e){
			throw new EmployeeNotFoundException("Employee Data not found");
		}	
	}

	@Override
	public EmployeeEntity forwardBug(int id, @Valid BugEntity bugEntity) {
		EmployeeEntity empData = employeeRepo.findById(id).get();
		empData.getBugEntityList().add(bugEntity);
		employeeRepo.save(empData);
		return empData;
	}
	

}
