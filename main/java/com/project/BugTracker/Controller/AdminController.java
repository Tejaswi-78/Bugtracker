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

import com.project.BugTracker.Entity.AdminEntity;
import com.project.BugTracker.Exception.AdminNotFoundException;
import com.project.BugTracker.Service.AdminService;


@RestController
public class AdminController {
	
	@Autowired
	private AdminService adminServices;
	
	@GetMapping("/admin")
	public List<AdminEntity> getAllAdmin() {
		return adminServices.getAllAdmin();
	}
	
	@GetMapping("admin/{id}")
	public Optional<AdminEntity> getAdminById(@PathVariable int id) throws AdminNotFoundException {
		return adminServices.getAdmin(id);
	}
	
	@PostMapping("admin")
	public AdminEntity addAdmin(@Valid @RequestBody AdminEntity adminEntity) {
		return adminServices.addAdmin(adminEntity);
	}
	
	@PutMapping("admin/{id}")
	public AdminEntity updateAdmin(@PathVariable int id,@Valid @RequestBody AdminEntity adminEntity) throws AdminNotFoundException {
		return adminServices.updateAdmin(id, adminEntity);
	}
	
	@DeleteMapping("admin/{id}")
	public Optional<AdminEntity> deleteAdmin(@PathVariable int id) throws AdminNotFoundException {
		return adminServices.deleteAdmin(id);
	}

}
