package com.example.grocery_store_sales_backend.config;

import com.example.grocery_store_sales_backend.model.Account;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.nio.file.attribute.UserPrincipal;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

public class AccountPrinciple implements UserDetails {
    private  Long id;
    private  String email;
    private String password;
    private Collection<? extends GrantedAuthority> role;

    public AccountPrinciple() {
    }

    public AccountPrinciple(Long id, String email, String password, Collection<? extends GrantedAuthority> role) {
        this.id = id;
        this.email = email;
        this.password = password;
        this.role = role;
    }
    public static AccountPrinciple build(Account account){
        List<GrantedAuthority> authorities = new ArrayList<>();
        authorities.add(new SimpleGrantedAuthority(account.getRole().getNameRole()));
        return new AccountPrinciple(
                account.getId(), account.getEmail(),account.getPassword(), authorities
        );
    }
    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return role;
    }

    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return email;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
