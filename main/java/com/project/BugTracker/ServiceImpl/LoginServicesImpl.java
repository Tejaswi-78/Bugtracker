package com.project.BugTracker.ServiceImpl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.BugTracker.DAO.LoginRepository;
import com.project.BugTracker.Entity.LoginEntity;
import com.project.BugTracker.Exception.LoginNotFoundException;
import com.project.BugTracker.Service.LoginService;

@Service
public class LoginServicesImpl implements LoginService {
	
	@Autowired
	public LoginRepository loginRepo;
	
	@Override
	public List<LoginEntity> getAllLogin() {
		return loginRepo.findAll();
	}

	@Override
	public Optional<LoginEntity> getLogin(String email) throws LoginNotFoundException {
		
		try {
			Optional<LoginEntity> loginData = loginRepo.findById(email);
			if(!loginData.isEmpty()) {
				return loginRepo.findById(email);
			}
			else {
				throw new LoginNotFoundException("login Data not found");
			}
		}
		catch(Exception e){
			throw new LoginNotFoundException("login Data not found");
		}
	}

	@Override
	public LoginEntity addLogin(LoginEntity loginEntity) {
		// TODO Auto-generated method stub
		return loginRepo.save(loginEntity);
	}

	@Override
	public Optional<LoginEntity> deleteLogin(String email) throws LoginNotFoundException {
		try {
			Optional<LoginEntity> loginData = loginRepo.findById(email);
			if(!loginData.isEmpty()) {
				loginRepo.deleteById(email);
				return loginData;
			}
			else {
				throw new LoginNotFoundException("login Data not found");
			}
		}
		catch(Exception e){
			throw new LoginNotFoundException("login Data not found");
		}
	}

	@Override
	public LoginEntity updateLogin(String email, LoginEntity loginEntity) throws LoginNotFoundException {
		try {
			Optional<LoginEntity> loginData = loginRepo.findById(email);
			if(!loginData.isEmpty()) {
				loginEntity.setEmail(email);
				return loginRepo.save(loginEntity);
			}
			else {
				throw new LoginNotFoundException("login Data not found");
			}
		}
		catch(Exception e){
			throw new LoginNotFoundException("login Data not found");
		}
	}
	
}
