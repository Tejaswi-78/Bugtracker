package com.project.BugTracker.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.project.BugTracker.Entity.*;
import com.project.BugTracker.Exception.LoginNotFoundException;

@Service
public interface LoginService {

	public List<LoginEntity> getAllLogin();
	
	public Optional<LoginEntity> getLogin(String email) throws LoginNotFoundException;
	
	public LoginEntity addLogin(LoginEntity loginEntity);
	
	public Optional<LoginEntity> deleteLogin(String email) throws LoginNotFoundException;
	
	public LoginEntity updateLogin(String email, LoginEntity loginEntity) throws LoginNotFoundException;
	
	
}
