package com.example.grocery_store_sales_backend.service;

import com.example.grocery_store_sales_backend.model.Users;
import com.example.grocery_store_sales_backend.repository.IUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService implements IUserService{
    @Autowired
    private IUserRepository userRepository;
    @Override
    public Optional<Users> getUserByEmail(String email) {
        return userRepository.findByEmailUser(email);
    }

    @Override
    public Optional<Users> getUserById(Integer id) {
        return userRepository.findById(id);
    }
}
