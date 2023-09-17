package com.example.grocery_store_sales_backend.service;

import com.example.grocery_store_sales_backend.model.StatusOrder;
import com.example.grocery_store_sales_backend.repository.IStatusOrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;
@Service
public class StatusOrderService implements IStatusOrderService{
    @Autowired
    private IStatusOrderRepository statusOrderRepository;
    @Override
    public Optional<StatusOrder> findByIdStatusOrder(Integer id) {
        return statusOrderRepository.findById(id);
    }
}
