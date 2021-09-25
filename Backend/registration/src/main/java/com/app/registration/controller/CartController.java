package com.app.registration.controller;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
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
	private Cart cart;
	@PostMapping("/cart")
	@CrossOrigin(origins = "http://localhost:4200")
	public Cart cartStorage(@RequestBody Cart cart)  {
		Cart obj=null;
		LocalDate date=cart.getDate();
		date=java.time.LocalDate.now();
		cart.setDate(date);
		obj=service.saveUser(cart);
		return obj;
		
		
	}
	@GetMapping("/getOrders")
	@CrossOrigin(origins = "http://localhost:4200")
	public List<Cart> getOrders()  {
		return service.getOrders();
		
	}
}
