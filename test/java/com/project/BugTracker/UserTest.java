package com.project.BugTracker;

import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.when;

import java.util.Optional;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import com.project.BugTracker.Entity.UserEntity;
import com.project.BugTracker.Exception.UserNotFoundException;
import com.project.BugTracker.Service.UserService;

@ExtendWith(MockitoExtension.class)
public class UserTest {

	@Mock
	UserService iUserService;

	@Test
	void addUserTest(){
		UserEntity userEntity = new UserEntity(1,"mahii","chow");
		when(iUserService.addUser(userEntity)).thenReturn(userEntity);
		assertEquals(iUserService.addUser(userEntity),userEntity);
	}
	
	@Test
	void getUserTest() throws UserNotFoundException {
		UserEntity userEntity = new UserEntity(1,"mahii","chow");
		Optional<UserEntity> OUserEntity = Optional.of(userEntity);
		when(iUserService.getUser(1)).thenReturn(OUserEntity);
		assertEquals(iUserService.getUser(1).get(),userEntity);
	}
	
	@Test
	void updateUserTest() throws UserNotFoundException {
		UserEntity userEntity = new UserEntity(1,"mahii","chow");
		when(iUserService.updateUser(1,userEntity)).thenReturn(userEntity);
		assertEquals(iUserService.updateUser(1,userEntity),userEntity);
	}
	
	@Test
	void deleteUserTest() throws UserNotFoundException {
		UserEntity userEntity = new UserEntity(1,"mahii","chow");
		Optional<UserEntity> OUserEntity = Optional.of(userEntity);
		when(iUserService.deleteUser(1)).thenReturn(OUserEntity);
		assertEquals(iUserService.deleteUser(1).get(),userEntity);
	}

}
