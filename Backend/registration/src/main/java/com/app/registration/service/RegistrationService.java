package com.app.registration.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.registration.model.User;
import com.app.registration.repository.RegistrationRepository;

@Service
public class RegistrationService {
	@Autowired
	private RegistrationRepository repo;
	
	public User saveUser(User user) {
		repo.save(user);
		return user;
	}
	
	public User getUserByUsername(String username) {
		return repo.getByUsername(username);
		
	}
	public User getUserByUsernameAndPassword(String username,String password) {
		return repo.getByUsernameAndPassword(username,password);
		
	}
	
}
