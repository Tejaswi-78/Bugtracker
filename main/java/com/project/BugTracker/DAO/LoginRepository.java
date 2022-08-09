package com.project.BugTracker.DAO;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.project.BugTracker.Entity.LoginEntity;

@Repository
public interface LoginRepository extends JpaRepository<LoginEntity,String>{

}
