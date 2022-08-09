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

import com.project.BugTracker.Entity.LoginEntity;
import com.project.BugTracker.Exception.LoginNotFoundException;
import com.project.BugTracker.Service.LoginService;

@RestController
public class LoginController {
	
	@Autowired
	private LoginService loginServices;
	
	@GetMapping("/login")
	public List<LoginEntity> getAllLogin() {
		return loginServices.getAllLogin();
	}
	
	@GetMapping("login/{email}")
	public Optional<LoginEntity> getLoginById(@PathVariable String email) throws LoginNotFoundException {
		return loginServices.getLogin(email);
	}
	
	@PostMapping("login")
	public LoginEntity addLogin(@Valid @RequestBody LoginEntity LoginEntity) {
		return loginServices.addLogin(LoginEntity);
	}
	
	@PutMapping("login/{email}")
	public LoginEntity updateLogin(@PathVariable String email,@Valid @RequestBody LoginEntity LoginEntity) throws LoginNotFoundException {
		return loginServices.updateLogin(email, LoginEntity);
	}
	
	@DeleteMapping("login/{email}")
	public Optional<LoginEntity> deleteLogin(@PathVariable String email) throws LoginNotFoundException {
		return loginServices.deleteLogin(email);
	}
}
