package com.example.grocery_store_sales_backend.controller;


import com.example.grocery_store_sales_backend.config.JwtTokenUtil;
import com.example.grocery_store_sales_backend.dto.AccountDto;
import com.example.grocery_store_sales_backend.dto.UserDto;
import com.example.grocery_store_sales_backend.model.JwtRequest;
import com.example.grocery_store_sales_backend.model.JwtResponse;
import com.example.grocery_store_sales_backend.model.Users;
import com.example.grocery_store_sales_backend.service.IUserService;
import com.example.grocery_store_sales_backend.service.JwtUserDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;

/*
Expose a POST API /authenticate using the JwtAuthenticationController. The POST API gets username and password in the
body- Using Spring Authentication Manager we authenticate the username and password.If the credentials are valid,
a JWT token is created using the JWTTokenUtil and provided to the client.
 */
@RestController
@CrossOrigin
public class JwtAuthenticationController {
    @Autowired
    private IUserService userService;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtTokenUtil jwtTokenUtil;

    @Autowired
    private JwtUserDetailsService userDetailsService;

    @RequestMapping(value = "/register", method = RequestMethod.POST)
    public ResponseEntity<?> saveUser(@RequestBody UserDto userDto) throws Exception {
        System.out.println("nhan");
        return ResponseEntity.ok(userDetailsService.save(userDto));
    }

    @RequestMapping(value = "/login", method = RequestMethod.POST)
    public ResponseEntity<?> createAuthenticationToken(@RequestBody JwtRequest authenticationRequest) throws Exception {

        authenticate(authenticationRequest.getEmail(), authenticationRequest.getPassword());

        final UserDetails userDetails = userDetailsService
                .loadUserByUsername(authenticationRequest.getEmail());

        final String token = jwtTokenUtil.generateToken(userDetails);
        final Users user= userService.getUserByEmail(authenticationRequest.getEmail()).get();

        return ResponseEntity.ok(new JwtResponse(user.getId(),token,userDetails.getUsername(),user.getNameUser(),user.getImgUser(),user.getAccount().getRole().getNameRole()));
    }


    private void authenticate(String username, String password) throws Exception {
        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));
        } catch (DisabledException e) {
            throw new Exception("USER_DISABLED", e);
        } catch (BadCredentialsException e) {
            throw new Exception("INVALID_CREDENTIALS", e);
        }
    }
    @PreAuthorize("hasRole('ROLE_USER')")
    @GetMapping("/test")
    public ResponseEntity<?> testEndpoint() {
        // Logic xử lý cho endpoint /test
        return ResponseEntity.ok("Test endpoint");
    }
}
