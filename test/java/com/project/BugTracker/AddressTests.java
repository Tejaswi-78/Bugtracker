package com.project.BugTracker;

import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.when;

import java.util.Optional;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import com.project.BugTracker.Entity.AddressEntity;
import com.project.BugTracker.Exception.AddressNotFoundException;
import com.project.BugTracker.Service.AddressService;

@ExtendWith(MockitoExtension.class)
public class AddressTests {

	@Mock
	AddressService iAddressService;

	@Test
	void addAddressTest() {
		AddressEntity addressEntity = new AddressEntity(1,"hyd","telangana",123654);
		when(iAddressService.addAddress(addressEntity)).thenReturn(addressEntity);
		assertEquals(iAddressService.addAddress(addressEntity),addressEntity);
	}
	
	@Test
	void getAddressTest() throws AddressNotFoundException {
		AddressEntity addressEntity = new AddressEntity(1,"hyd","telangana",123654);
		Optional<AddressEntity> OAddressEntity = Optional.of(addressEntity);
		when(iAddressService.getAddress(1)).thenReturn(OAddressEntity);
		assertEquals(iAddressService.getAddress(1).get(),addressEntity);
	}
	
	@Test
	void updateAddressTest() throws AddressNotFoundException {
		AddressEntity addressEntity = new AddressEntity(1,"hyd","telangana",123654);
		when(iAddressService.updateAddress(1,addressEntity)).thenReturn(addressEntity);
		assertEquals(iAddressService.updateAddress(1,addressEntity),addressEntity);
	}
	
	@Test
	void deleteAddressTest() throws AddressNotFoundException {
		AddressEntity addressEntity = new AddressEntity(1,"hyd","telangana",123654);
		Optional<AddressEntity> OAddressEntity = Optional.of(addressEntity);
		when(iAddressService.deleteAddress(1)).thenReturn(OAddressEntity);
		assertEquals(iAddressService.deleteAddress(1).get(),addressEntity);
	}

}
