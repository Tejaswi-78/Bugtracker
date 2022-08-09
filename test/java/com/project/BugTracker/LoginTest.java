package com.project.BugTracker;

import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.when;

import java.util.Optional;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import com.project.BugTracker.Service.LoginService;
import com.project.BugTracker.Entity.LoginEntity;
import com.project.BugTracker.Exception.LoginNotFoundException;


@ExtendWith(MockitoExtension.class)
public class LoginTest {
	
	@Mock
	LoginService loginService;
	
	@Test
	void addLoginTest() {
		LoginEntity loginEntity = new LoginEntity("qaz@qaz.com","qwerty","user");
		when(loginService.addLogin(loginEntity)).thenReturn(loginEntity);
		assertEquals(loginService.addLogin(loginEntity),loginEntity);
	}
	
	@Test
	void getLoginTest() throws LoginNotFoundException {
		LoginEntity loginEntity = new LoginEntity("qaz@qaz.com","qwerty","user");
		Optional<LoginEntity> OLoginEntity = Optional.of(loginEntity);
		when(loginService.getLogin("qaz@qaz.com")).thenReturn(OLoginEntity);
		assertEquals(loginService.getLogin("qaz@qaz.com").get(),loginEntity);
	}
	
	@Test
	void updateLoginTest() throws LoginNotFoundException {
		LoginEntity loginEntity = new LoginEntity("qaz@qaz.com","qwerty","user");
		when(loginService.updateLogin("qaz@qaz.com",loginEntity)).thenReturn(loginEntity);
		assertEquals(loginService.updateLogin("qaz@qaz.com",loginEntity),loginEntity);
	}
	
	@Test
	void deleteLoginTest() throws LoginNotFoundException {
		LoginEntity loginEntity = new LoginEntity("qaz@qaz.com","qwerty","user");
		Optional<LoginEntity> OLoginEntity = Optional.of(loginEntity);
		when(loginService.deleteLogin("qaz@qaz.com")).thenReturn(OLoginEntity);
		assertEquals(loginService.deleteLogin("qaz@qaz.com").get(),loginEntity);
	}
}
