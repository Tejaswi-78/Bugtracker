package com.project.BugTracker.DAO;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.project.BugTracker.Entity.AdminEntity;

@Repository
public interface AdminRepository extends JpaRepository<AdminEntity,Integer> {

}
