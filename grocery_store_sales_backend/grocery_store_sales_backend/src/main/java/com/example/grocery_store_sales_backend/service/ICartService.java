package com.example.grocery_store_sales_backend.service;

import com.example.grocery_store_sales_backend.model.CartDetail;

import java.util.List;
import java.util.Optional;

public interface ICartService {
    List<CartDetail> getCarts(Integer id);
    List<CartDetail> getCartsByIdProduct(Long id);
    boolean deleteCard(Long id,Integer idUser);
    Optional<CartDetail> findById(Long id);
    CartDetail saveCard(CartDetail cartDetail);

    boolean updateCard(CartDetail cartDetail);
}
