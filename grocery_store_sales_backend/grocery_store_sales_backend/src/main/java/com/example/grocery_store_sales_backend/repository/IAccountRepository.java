package com.example.grocery_store_sales_backend.repository;

import com.example.grocery_store_sales_backend.model.Account;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IAccountRepository extends JpaRepository<Account,Integer> {
    Account findByEmail(String email);
    boolean existsAccountByEmail(String email);
}
