package com.example.grocery_store_sales_backend.service;

import com.example.grocery_store_sales_backend.Projection.IOrderCustomerProjection;
import com.example.grocery_store_sales_backend.Projection.IOrderProjection;
import com.example.grocery_store_sales_backend.model.Order;
import com.example.grocery_store_sales_backend.repository.IOrderRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.Optional;

public interface IOrderService {
    Page<IOrderCustomerProjection> getOrderByCustomer(Integer id, int idType, Pageable pageable);

    Page<IOrderProjection> getOrdersManage(String name,String dateOne,String dateTwo, Pageable pageable);

    Order saveOrder(Order order);
    Page<IOrderProjection> getByIdOrderAll(Pageable pageable,Long id);
    Optional<Order> findByIdOrder(Long id);
    boolean updateStatusOrder(Long id,int type);
}