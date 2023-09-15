package com.example.grocery_store_sales_backend.service;

import com.example.grocery_store_sales_backend.config.AccountPrinciple;
import com.example.grocery_store_sales_backend.dto.AccountDto;
import com.example.grocery_store_sales_backend.dto.UserDto;
import com.example.grocery_store_sales_backend.model.Account;
import com.example.grocery_store_sales_backend.model.Role;
import com.example.grocery_store_sales_backend.model.Users;
import com.example.grocery_store_sales_backend.repository.IAccountRepository;
import com.example.grocery_store_sales_backend.repository.IRoleRepository;
import com.example.grocery_store_sales_backend.repository.IUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

/*
JWTUserDetailsService implements the Spring Security UserDetailsService interface.
It overrides the loadUserByUsername for fetching user details from the database using the username.
The Spring Security Authentication Manager calls this method for getting the user details from the database
when authenticating the user details provided by the user. Here we are getting the user details from a hardcoded
User List. In the next tutorial we will be adding the DAO implementation for fetching User Details from the Database.
Also the password for a user is stored in encrypted format using BCrypt.
Previously we have seen Spring Boot Security - Password Encoding Using Bcrypt.
Here using the Online Bcrypt Generator you can generate the Bcrypt for a password.
 */
@Service
public class JwtUserDetailsService implements UserDetailsService {
    @Autowired
    private IUserRepository userRepository;
    @Autowired
    private IRoleRepository roleRepository;
    @Autowired
    private IAccountRepository accountRepository;

    @Autowired
    private PasswordEncoder bcryptEncoder;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        Account account = accountRepository.findByEmail(email);

        if (account == null) {
            throw new UsernameNotFoundException("User not found with email: " + email);
        }
        return AccountPrinciple.build(account);
    }

    public Account save(UserDto userDto) {
        Account account =new Account();
        account.setEmail(userDto.getEmailUser());
        account.setPassword(bcryptEncoder.encode(userDto.getPassword()));
        account.setRole(roleRepository.findById(1).orElse(null));
        try {
            accountRepository.save(account);
        }catch (Exception d){

            System.out.println("vu");
        }

        Users users = new Users();
        users.setNameUser(userDto.getNameUser());
        users.setAddressUser(userDto.getAddressUser());
        users.setBirthUser(userDto.getBirthUser());
        users.setEmailUser(userDto.getEmailUser());
        users.setGenderUser(userDto.getGenderUser());
        users.setIdCardUser(userDto.getIdCardUser());
        users.setPhoneUser(userDto.getPhoneUser());
        users.setFlagUser(false);
        if(userDto.getImgUser().equals("")){
            users.setImgUser("https://facebookninja.vn/wp-content/uploads/2023/06/anh-dai-dien-mac-dinh-zalo.jpg");
        }
        else {
            users.setImgUser(userDto.getImgUser());
        }
        users.setAccount(accountRepository.findByEmail(userDto.getEmailUser()));
        try {
            userRepository.save(users);
        }catch (Exception e){
            System.out.println(e.getMessage());
        }

        return account;
    }
}
