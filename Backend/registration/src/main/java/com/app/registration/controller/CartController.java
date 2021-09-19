package com.app.registration.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.app.registration.model.Cart;
import com.app.registration.model.User;
import com.app.registration.service.CartService;
import com.app.registration.service.RegistrationService;
@RestController
public class CartController {
	@Autowired
	private CartService service;
	
	@PostMapping("/cart")
	@CrossOrigin(origins = "http://localhost:4200")
	public Cart cartStorage(@RequestBody Cart cart)  throws Exception{
		Cart obj=null;
		obj=service.saveUser(cart);
		return obj;
		
		
	}
}
