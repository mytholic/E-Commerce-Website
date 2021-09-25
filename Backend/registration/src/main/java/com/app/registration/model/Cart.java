package com.app.registration.model;

import java.time.LocalDate;
import java.time.LocalTime;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;



	@Entity
	@Table(name="Orders")
	public class Cart {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int  id;

	private String username;

	private String item;
	private String address;
	private int quantity;

	private int  price;

	private LocalDate date;



	public LocalDate getDate() {
		return date;
	}

	public void setDate(LocalDate date) {
		this.date = date;
	}

	public Cart() {}

	public String getUsername() {
		return username;
	}
	
	

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public Cart(String username, String item, int quantity, int price,String address,LocalDate date) {
		super();
		this.username = username;
		this.item = item;
		this.quantity = quantity;
		this.price = price;
		this.address=address;
		this.date=date;
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

	
	

