package com.project.BugTracker;

import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.when;

import java.util.Optional;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import com.project.BugTracker.Entity.AdminEntity;
import com.project.BugTracker.Exception.AdminNotFoundException;
import com.project.BugTracker.Service.AdminService;

@ExtendWith(MockitoExtension.class)
public class AdminTests {

	@Mock
	AdminService iAdminService;

	@Test
	void addAdminTest(){
		AdminEntity adminEntity = new AdminEntity(1,"mahii","7412589630");
		when(iAdminService.addAdmin(adminEntity)).thenReturn(adminEntity);
		assertEquals(iAdminService.addAdmin(adminEntity),adminEntity);
	}
	
	@Test
	void getAdminTest() throws AdminNotFoundException {
		AdminEntity adminEntity = new AdminEntity(1,"mahii","7412589630");
		Optional<AdminEntity> OAdminEntity = Optional.of(adminEntity);
		when(iAdminService.getAdmin(1)).thenReturn(OAdminEntity);
		assertEquals(iAdminService.getAdmin(1).get(),adminEntity);
	}
	
	@Test
	void updateAdminTest() throws AdminNotFoundException {
		AdminEntity adminEntity = new AdminEntity(1,"mahii","7412589630");
		when(iAdminService.updateAdmin(1,adminEntity)).thenReturn(adminEntity);
		assertEquals(iAdminService.updateAdmin(1,adminEntity),adminEntity);
	}
	
	@Test
	void deleteAdminTest() throws AdminNotFoundException {
		AdminEntity adminEntity = new AdminEntity(1,"mahii","7412589630");
		Optional<AdminEntity> OAdminEntity = Optional.of(adminEntity);
		when(iAdminService.deleteAdmin(1)).thenReturn(OAdminEntity);
		assertEquals(iAdminService.deleteAdmin(1).get(),adminEntity);
	}

}
