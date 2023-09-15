package com.example.grocery_store_sales_backend.service;

import com.example.grocery_store_sales_backend.Projection.IProductProjection;
import com.example.grocery_store_sales_backend.model.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;
import java.util.Optional;

public interface IProductService {
    Optional<Product> getProduct(Long id);
    Page<IProductProjection> getProducts(Pageable pageable,Integer type,String search,Integer searchStatus);
    Page<IProductProjection> getAllProductByType(int id,Pageable pageable);

}
