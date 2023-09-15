package com.example.grocery_store_sales_backend.repository;

import com.example.grocery_store_sales_backend.model.Role;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface IRoleRepository extends JpaRepository<Role,Integer> {

    Optional<Role> findByNameRole(String nameRole);
}
