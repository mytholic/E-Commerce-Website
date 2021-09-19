package com.app.registration.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.registration.model.Cart;


@Repository
public interface CartRepository extends JpaRepository<Cart, Integer> {
}
