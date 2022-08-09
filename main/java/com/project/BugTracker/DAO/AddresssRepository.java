package com.project.BugTracker.DAO;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.project.BugTracker.Entity.AddressEntity;

@Repository
public interface AddresssRepository extends JpaRepository<AddressEntity,Integer>{

}
