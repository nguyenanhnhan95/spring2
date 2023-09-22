package com.example.grocery_store_sales_backend.controller;

import com.example.grocery_store_sales_backend.Projection.IProductProjection;
import com.example.grocery_store_sales_backend.Projection.ImgProductProjection;
import com.example.grocery_store_sales_backend.model.ImgProduct;
import com.example.grocery_store_sales_backend.model.Product;
import com.example.grocery_store_sales_backend.repository.IProductImgRepository;
import com.example.grocery_store_sales_backend.service.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/products")
public class ProductController {
    @Autowired
    private IProductService productService;
    @Autowired
    private IProductImgRepository productImgRepository;

    @GetMapping("")
    public ResponseEntity<Page<IProductProjection>> getProducts(@RequestParam("page") String page, @RequestParam("type") String type
            , @RequestParam("search") String search, @RequestParam("searchStatus") String searchStatus, @RequestParam("sort") String sort) {
        Pageable pageable = PageRequest.of(Integer.parseInt(page), 10);
        if (productService.getProducts(pageable, Integer.valueOf(type), search, Integer.valueOf(searchStatus),Integer.valueOf(sort)).isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(productService.getProducts(pageable, Integer.valueOf(type), search, Integer.valueOf(searchStatus),Integer.valueOf(sort)), HttpStatus.OK);
        }
    }

    @GetMapping("/type")
    public ResponseEntity<Page<IProductProjection>> getProductsAll(@RequestParam("id") String id, Pageable pageable) {
        if (productService.getAllProductByType(Integer.parseInt(id), pageable).isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(productService.getAllProductByType(Integer.parseInt(id), pageable), HttpStatus.OK);
        }
    }

    @GetMapping("/img")
    public ResponseEntity<List<ImgProductProjection>> getProductImg(@RequestParam("id") String id) {
        if (productImgRepository.findAllByProductId(Long.valueOf(id)).isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(productImgRepository.findAllByProductId(Long.valueOf(id)), HttpStatus.OK);
        }
    }

    @GetMapping("/detail")
    public ResponseEntity<Product> getProduct(@RequestParam("id") String id) {
        System.out.println(id);
        if (productService.getProduct(Long.valueOf(id)).isPresent()) {
            System.out.println(productService.getProduct(Long.valueOf(id)).get().getDetailProduct());
            return new ResponseEntity<>(productService.getProduct(Long.valueOf(id)).get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
    }
}
