package com.project.BugTracker.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.project.BugTracker.Entity.AddressEntity;
import com.project.BugTracker.Exception.AddressNotFoundException;


@Service
public interface AddressService {
	
	public List<AddressEntity> getAllAddress();
	
	public Optional<AddressEntity> getAddress(int id) throws AddressNotFoundException;
	
	public AddressEntity addAddress(AddressEntity addressEntity);
	
	public Optional<AddressEntity> deleteAddress(int id) throws AddressNotFoundException;
	
	public AddressEntity updateAddress(int id, AddressEntity addressEntity) throws AddressNotFoundException;

}
