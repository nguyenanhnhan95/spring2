package com.example.grocery_store_sales_backend.service;

import com.example.grocery_store_sales_backend.model.OrderDetail;

public interface IOrderDetailService {
    OrderDetail saveOrderDetail(OrderDetail orderDetail);
}
