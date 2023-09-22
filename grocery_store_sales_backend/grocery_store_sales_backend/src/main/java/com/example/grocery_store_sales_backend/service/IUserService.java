package com.example.grocery_store_sales_backend.service;

import com.example.grocery_store_sales_backend.model.Users;

import java.util.Optional;

public interface IUserService {
    Optional<Users> getUserByEmail(String email);
    Optional<Users> getUserById(Integer id);
}
