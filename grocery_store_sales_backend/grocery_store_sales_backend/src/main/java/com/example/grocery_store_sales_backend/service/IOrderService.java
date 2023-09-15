package com.example.grocery_store_sales_backend.service;

import com.example.grocery_store_sales_backend.Projection.IOrderCustomerProjection;
import com.example.grocery_store_sales_backend.Projection.IOrderProjection;
import com.example.grocery_store_sales_backend.repository.IOrderRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface IOrderService {
    Page<IOrderCustomerProjection> getOrderByCustomer(Integer id,int idType, Pageable pageable);
    Page<IOrderProjection> getOrdersManage(String name, Pageable pageable);
}
