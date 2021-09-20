package com.app.registration.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.registration.model.Cart;
import com.app.registration.model.User;
import com.app.registration.repository.CartRepository;
import com.app.registration.repository.RegistrationRepository;
@Service
public class CartService {
	@Autowired
	private CartRepository repo;
	public Cart saveUser(Cart cart) {
		repo.save(cart);
		return cart;
	}
	public List<Cart> getOrders(){
		return  repo.findAll();
		

	}
}
