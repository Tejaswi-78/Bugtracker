package com.project.BugTracker.DAO;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.project.BugTracker.Entity.BugEntity;

@Repository
public interface BugRepository  extends JpaRepository<BugEntity,Integer>{

}
