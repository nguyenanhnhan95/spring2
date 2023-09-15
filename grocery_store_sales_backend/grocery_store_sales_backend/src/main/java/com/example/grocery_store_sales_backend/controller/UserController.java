package com.example.grocery_store_sales_backend.controller;

import com.example.grocery_store_sales_backend.model.CartDetail;
import com.example.grocery_store_sales_backend.model.Users;
import com.example.grocery_store_sales_backend.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/users")
public class UserController {
    @Autowired
    private IUserService userService;
    @PreAuthorize("hasRole('ROLE_USER') or hasRole('ROLE_ADMIN')")
    @GetMapping("")
    public ResponseEntity<Users> getUser() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String email = authentication.getName();
        System.out.println("nhan");
        if (userService.getUserByEmail(email).isPresent()) {
            return new ResponseEntity<>(userService.getUserByEmail(email).get(),HttpStatus.OK);
        } else {
            return new ResponseEntity<>( HttpStatus.NO_CONTENT);
        }
    }


}
