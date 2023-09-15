package com.example.grocery_store_sales_backend.service;

import com.example.grocery_store_sales_backend.model.Account;

public interface IAccountService {
    Account saveAccount(Account account);
    boolean existByEmail(String email);

}
