package com.app.registration.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="register")
public class User {
@Id
@GeneratedValue(strategy = GenerationType.AUTO)
private int  id;

private String name;

private String username;

private String password;

private String cpassword;

private String address;


public User() {}


public User(String name, String username, String password, String cpassword, String address) {
	super();
	this.name = name;
	this.username = username;
	this.password = password;
	this.cpassword = cpassword;
	this.address = address;
}
public String getName() {
	return name;
}
public void setName(String name) {
	this.name = name;
}
public String getUsername() {
	return username;
}
public void setUsername(String username) {
	this.username = username;
}
public String getPassword() {
	return password;
}
public void setPassword(String password) {
	this.password = password;
}
public String getCpassword() {
	return cpassword;
}
public void setCpassword(String cpassword) {
	this.cpassword = cpassword;
}
public String getAddress() {
	return address;
}
public void setAddress(String address) {
	this.address = address;
}

}
