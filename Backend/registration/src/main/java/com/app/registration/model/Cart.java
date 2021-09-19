package com.app.registration.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;



	@Entity
	@Table(name="cart")
	public class Cart {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int  id;

	private String username;

	private String item;

	private int quantity;

	private int  price;

	public Cart() {}

	public String getUsername() {
		return username;
	}
	
	

	public Cart(String username, String item, int quantity, int price) {
		super();
		this.username = username;
		this.item = item;
		this.quantity = quantity;
		this.price = price;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getItem() {
		return item;
	}

	public void setItem(String item) {
		this.item = item;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

	public int getPrice() {
		return price;
	}

	public void setPrice(int price) {
		this.price = price;
	}
	
	
	}

	
	

