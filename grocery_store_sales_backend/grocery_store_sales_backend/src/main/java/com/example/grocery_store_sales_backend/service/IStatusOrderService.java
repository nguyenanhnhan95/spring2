package com.example.grocery_store_sales_backend.service;

import com.example.grocery_store_sales_backend.model.StatusOrder;
import org.springframework.stereotype.Service;

import java.util.Optional;

public interface IStatusOrderService {

    Optional<StatusOrder> findByIdStatusOrder(Integer id);
}
