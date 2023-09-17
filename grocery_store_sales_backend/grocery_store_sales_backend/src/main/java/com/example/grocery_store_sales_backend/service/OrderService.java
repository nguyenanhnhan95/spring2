package com.example.grocery_store_sales_backend.service;

import com.example.grocery_store_sales_backend.Projection.IOrderCustomerProjection;
import com.example.grocery_store_sales_backend.Projection.IOrderProjection;
import com.example.grocery_store_sales_backend.model.Order;
import com.example.grocery_store_sales_backend.repository.IOrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class OrderService implements IOrderService{
    @Autowired
    private IOrderRepository orderRepository;
    @Override
    public Page<IOrderCustomerProjection> getOrderByCustomer(Integer id,int idType, Pageable pageable) {
        return orderRepository.getOrderByCustomer(id,idType,pageable);
    }

    @Override
    public Page<IOrderProjection> getOrdersManage(String name, Pageable pageable) {
        return orderRepository.getManageOrder(name,pageable);
    }

    @Override
    public Order saveOrder(Order order) {
        return orderRepository.save(order);
    }
}
