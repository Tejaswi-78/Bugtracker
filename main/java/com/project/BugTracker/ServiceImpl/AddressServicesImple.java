package com.project.BugTracker.ServiceImpl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.BugTracker.DAO.AddresssRepository;
import com.project.BugTracker.Entity.AddressEntity;
import com.project.BugTracker.Exception.AddressNotFoundException;
import com.project.BugTracker.Service.AddressService;


@Service
public class AddressServicesImple implements AddressService{

	@Autowired
	private AddresssRepository addressRepo;
	
	@Override
	public List<AddressEntity> getAllAddress() {
		// TODO Auto-generated method stub
		return addressRepo.findAll();
	}

	@Override
	public Optional<AddressEntity> getAddress(int id) throws AddressNotFoundException  {
		
		try {
			Optional<AddressEntity> addressData = addressRepo.findById(id);
			if(!addressData.isEmpty()) {
				return addressRepo.findById(id);
			}
			else {
				throw new AddressNotFoundException("Address Data not found");
			}
		}
		catch(Exception e){
			throw new AddressNotFoundException("Address Data not found");
		}	
	}

	@Override
	public AddressEntity addAddress(AddressEntity addressEntity) {
		// TODO Auto-generated method stub
		return addressRepo.save(addressEntity);
	}

	@Override
	public Optional<AddressEntity> deleteAddress(int id) throws AddressNotFoundException {
		try {
			Optional<AddressEntity> addressData = addressRepo.findById(id);
			if(!addressData.isEmpty()) {
				addressRepo.deleteById(id);
				return addressData;
			}
			else {
				throw new AddressNotFoundException("Address Data not found");
			}
		}
		catch(Exception e){
			throw new AddressNotFoundException("Address Data not found");
		}
	}

	@Override
	public AddressEntity updateAddress(int id, AddressEntity addressEntity) throws AddressNotFoundException  {
		try {
			Optional<AddressEntity> addressData = addressRepo.findById(id);
			addressEntity.setId(id);
			if(!addressData.isEmpty()) {
				return addressRepo.save(addressEntity);
			}
			else {
				throw new AddressNotFoundException("Address Data not found");
			}
		}
		catch(Exception e){
			throw new AddressNotFoundException("Address Data not found");
		}	
	}

}
