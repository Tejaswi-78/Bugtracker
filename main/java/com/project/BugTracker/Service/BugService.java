package com.project.BugTracker.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.project.BugTracker.Entity.BugEntity;
import com.project.BugTracker.Exception.BugNotFoundException;

@Service
public interface BugService {

	public List<BugEntity> getAllBug();
	
	public Optional<BugEntity> getBug(int id) throws BugNotFoundException;
	
	public BugEntity addBug(BugEntity bugEntity);
	
	public Optional<BugEntity> deleteBug(int id) throws BugNotFoundException;
	
	public BugEntity updateBug(int id, BugEntity bugEntity) throws BugNotFoundException;
	
}
