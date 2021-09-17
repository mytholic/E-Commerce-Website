package com.app.registration.controller;

import javax.imageio.spi.RegisterableService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.registration.model.User;
import com.app.registration.service.RegistrationService;

@RestController
public class RegistrationController {
	@Autowired
	private RegistrationService service;
	
	@PostMapping("/registeruser")
	@CrossOrigin(origins = "http://localhost:37901")
	public User registerUser(@RequestBody User user)  throws Exception{
		User obj=null;
		String username=user.getUsername();
		obj=service.getUserByUsername(username);
		if(obj != null) {
			throw new Exception("username already exists");
		}
		
			obj=service.saveUser(user);
			return obj;
		
		
	}
	@PostMapping("/login")
	@CrossOrigin(origins = "http://localhost:37901")
	public User loginUser(@RequestBody User user) throws Exception {
		String username=user.getUsername();
		String password=user.getPassword();
		User obj=null;
		obj=service.getUserByUsernameAndPassword(username, password);
		if(obj == null) {
			throw new Exception("Incorrect Credentials");
		}
		return obj;
		
	}
	
	
}
