package com.example.grocery_store_sales_backend.repository;

import com.example.grocery_store_sales_backend.model.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface IUserRepository extends JpaRepository<Users,Long> {
    Optional<Users> findByEmailUser(String email);
}
