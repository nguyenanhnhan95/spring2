package com.example.grocery_store_sales_backend.controller;

import com.example.grocery_store_sales_backend.Projection.IProductProjection;
import com.example.grocery_store_sales_backend.model.CartDetail;
import com.example.grocery_store_sales_backend.model.Product;
import com.example.grocery_store_sales_backend.model.Users;
import com.example.grocery_store_sales_backend.repository.IUserRepository;
import com.example.grocery_store_sales_backend.service.ICartService;
import com.example.grocery_store_sales_backend.service.IProductService;
import com.example.grocery_store_sales_backend.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import javax.websocket.server.PathParam;
import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/carts")
public class CartController {
    @Autowired
    private ICartService cartService;
    @Autowired
    private IUserService userService;
    @Autowired
    private IProductService productService;

    @GetMapping("")
    public ResponseEntity<List<CartDetail>> getCarts(@RequestParam("id") String id) {
        if (cartService.getCarts(Integer.valueOf(id)).isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(cartService.getCarts(Integer.valueOf(id)), HttpStatus.OK);
        }
    }
    @GetMapping("/id-product")
    public ResponseEntity<List<CartDetail>> getCartsByIdProduct(@RequestParam("id") String id) {
        if (cartService.getCartsByIdProduct(Long.valueOf(id)).isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(cartService.getCartsByIdProduct(Long.valueOf(id)), HttpStatus.OK);
        }
    }

    @PatchMapping("")
    public ResponseEntity<?> updateCarts(@RequestBody CartDetail cartDetail) {
        if (cartService.findById(cartDetail.getId()).isPresent()) {
            if (cartService.updateCard(cartDetail)) {
                return new ResponseEntity<>(HttpStatus.OK);
            } else {
                return new ResponseEntity<>(HttpStatus.NOT_ACCEPTABLE);
            }
        } else {
            if (cartService.saveCard(cartDetail) != null) {
                cartService.saveCard(cartDetail);
                return new ResponseEntity<>(HttpStatus.OK);
            } else{
                return new ResponseEntity<>(HttpStatus.NOT_ACCEPTABLE);
            }
        }
    }
    @PreAuthorize("hasRole('ROLE_USER')")
    @PostMapping ("")
    public ResponseEntity<CartDetail> saveCarts(@RequestParam("id")String id) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String email = authentication.getName();
        Users user = userService.getUserByEmail(email).get();
        Product product=productService.getProduct(Long.valueOf(id)).get();
        if(product ==null || user==null){
            return new ResponseEntity<>(HttpStatus.NOT_ACCEPTABLE);
        }
        CartDetail cartDetail=new CartDetail();
        cartDetail.setNumberCart(1);
        cartDetail.setUser(user);
        cartDetail.setFlagCart(false);
        cartDetail.setProduct(product);
        if(cartService.saveCard(cartDetail)!=null){
            return new ResponseEntity<>(cartDetail,HttpStatus.OK);
        }
        return  new ResponseEntity<>(HttpStatus.OK);
    }

    @PreAuthorize("hasRole('ROLE_USER')")
    @DeleteMapping("")
    public ResponseEntity<?> deleteCard(@RequestParam("id") String id) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String email = authentication.getName();
        Users user = userService.getUserByEmail(email).get();
        if (cartService.deleteCard(Long.valueOf(id), user.getId())) {
            return new ResponseEntity<>(HttpStatus.ACCEPTED);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_ACCEPTABLE);
        }
    }

}
