package com.project.BugTracker.DAO;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.project.BugTracker.Entity.UserEntity;

@Repository
public interface UserRepository extends JpaRepository<UserEntity,Integer>{

}
