package com.project.BugTracker.ServiceImpl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.BugTracker.DAO.BugRepository;
import com.project.BugTracker.Entity.BugEntity;
import com.project.BugTracker.Exception.BugNotFoundException;
import com.project.BugTracker.Service.BugService;

@Service
public class BugServiceImpl implements BugService{
	@Autowired
	private BugRepository bugRepo;
	
	@Override
	public List<BugEntity> getAllBug() {
		return bugRepo.findAll();
	}

	@Override
	public Optional<BugEntity> getBug(int id) throws BugNotFoundException {
		try {
			Optional<BugEntity> bugData = bugRepo.findById(id);
			if(!bugData.isEmpty()) {
				return bugRepo.findById(id);
			}
			else {
				throw new BugNotFoundException("Bug Data not found");
			}
		}
		catch(Exception e){
			throw new BugNotFoundException("Bug Data not found");
		}	
	}

	@Override
	public BugEntity addBug(BugEntity bugEntity) {
		// TODO Auto-generated method stub
		return bugRepo.save(bugEntity);
	}

	@Override
	public Optional<BugEntity> deleteBug(int id) throws BugNotFoundException {

		try {
			Optional<BugEntity> bugData = bugRepo.findById(id);
			if(!bugData.isEmpty()) {
				bugRepo.deleteById(id);
				return bugData;
			}
			else {
				throw new BugNotFoundException("Bug Data not found");
			}
		}
		catch(Exception e){
			throw new BugNotFoundException("Bug Data not found");
		}
	}

	@Override
	public BugEntity updateBug(int id, BugEntity bugEntity) throws BugNotFoundException {
		try {
			Optional<BugEntity> bugData = bugRepo.findById(id);
			if(!bugData.isEmpty()) {
				bugEntity.setId(id);
				return bugRepo.save(bugEntity);
			}
			else {
				throw new BugNotFoundException("Bug Data not found");
			}
		}
		catch(Exception e){
			throw new BugNotFoundException("Bug Data not found");
		}	
	}
}
