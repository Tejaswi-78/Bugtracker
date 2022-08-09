package com.project.BugTracker;

import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.when;

import java.time.LocalDate;
import java.util.Optional;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import com.project.BugTracker.Entity.BugEntity;
import com.project.BugTracker.Exception.BugNotFoundException;
import com.project.BugTracker.Service.BugService;

@ExtendWith(MockitoExtension.class)
public class BugTest {

	@Mock
	BugService iBugService;

	@Test
	void addBugTest(){
		LocalDate date = LocalDate.of( 2012 , 12 , 7 );
		BugEntity bugEntity = new BugEntity(1,"pending","work in progress","mahii",date);
		when(iBugService.addBug(bugEntity)).thenReturn(bugEntity);
		assertEquals(iBugService.addBug(bugEntity),bugEntity);
	}
	
	@Test
	void getBugTest() throws BugNotFoundException {
		LocalDate date = LocalDate.of( 2012 , 12 , 7 );
		BugEntity bugEntity = new BugEntity(1,"pending","work in progress","mahii",date);
		Optional<BugEntity> OBugEntity = Optional.of(bugEntity);
		when(iBugService.getBug(1)).thenReturn(OBugEntity);
		assertEquals(iBugService.getBug(1).get(),bugEntity);
	}
	
	@Test
	void updateBugTest() throws BugNotFoundException {
		LocalDate date = LocalDate.of( 2012 , 12 , 7 );
		BugEntity bugEntity = new BugEntity(1,"pending","work in progress","mahii",date);
		when(iBugService.updateBug(1,bugEntity)).thenReturn(bugEntity);
		assertEquals(iBugService.updateBug(1,bugEntity),bugEntity);
	}
	
	@Test
	void deleteBugTest() throws BugNotFoundException {
		LocalDate date = LocalDate.of( 2012 , 12 , 7 );
		BugEntity bugEntity = new BugEntity(1,"pending","work in progress","mahii",date);
		Optional<BugEntity> OBugEntity = Optional.of(bugEntity);
		when(iBugService.deleteBug(1)).thenReturn(OBugEntity);
		assertEquals(iBugService.deleteBug(1).get(),bugEntity);
	}

}
