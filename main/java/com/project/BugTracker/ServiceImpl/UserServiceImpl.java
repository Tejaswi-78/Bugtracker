package com.project.BugTracker.ServiceImpl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.BugTracker.DAO.UserRepository;
import com.project.BugTracker.Entity.UserEntity;
import com.project.BugTracker.Exception.UserNotFoundException;
import com.project.BugTracker.Service.UserService;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private UserRepository userRepo;
	
	@Override
	public List<UserEntity> getAllUser() {
		return userRepo.findAll();
	}

	@Override
	public Optional<UserEntity> getUser(int id) throws UserNotFoundException {
		try {
			Optional<UserEntity> userData = userRepo.findById(id);
			if(!userData.isEmpty()) {
				return userRepo.findById(id);
			}
			else {
				throw new UserNotFoundException("User Data not found");
			}
		}
		catch(Exception e){
			throw new UserNotFoundException("User Data not found");
		}	
	}

	@Override
	public UserEntity addUser(UserEntity userEntity) {
		// TODO Auto-generated method stub
		return userRepo.save(userEntity);
	}

	@Override
	public Optional<UserEntity> deleteUser(int id) throws UserNotFoundException {

		try {
			Optional<UserEntity> userData = userRepo.findById(id);
			if(!userData.isEmpty()) {
				userRepo.deleteById(id);
				return userData;
			}
			else {
				throw new UserNotFoundException("User Data not found");
			}
		}
		catch(Exception e){
			throw new UserNotFoundException("User Data not found");
		}
	}

	@Override
	public UserEntity updateUser(int id, UserEntity userEntity) throws UserNotFoundException {
		try {
			Optional<UserEntity> userData = userRepo.findById(id);
			if(!userData.isEmpty()) {
				userEntity.setId(id);
				return userRepo.save(userEntity);
			}
			else {
				throw new UserNotFoundException("User Data not found");
			}
		}
		catch(Exception e){
			throw new UserNotFoundException("User Data not found");
		}	
	}
	

}
