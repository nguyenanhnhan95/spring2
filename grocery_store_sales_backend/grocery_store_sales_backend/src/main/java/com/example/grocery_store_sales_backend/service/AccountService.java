package com.example.grocery_store_sales_backend.service;

import com.example.grocery_store_sales_backend.model.Account;
import com.example.grocery_store_sales_backend.repository.IAccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AccountService implements IAccountService{
    @Autowired
    private IAccountRepository accountRepository;

    @Override
    public Account saveAccount(Account account) {
        return accountRepository.save(account);
    }

    @Override
    public boolean existByEmail(String email) {
        return accountRepository.existsAccountByEmail(email);
    }
}
