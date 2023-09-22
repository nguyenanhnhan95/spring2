package com.example.grocery_store_sales_backend.service;

import com.example.grocery_store_sales_backend.Projection.IOrderCustomerProjection;
import com.example.grocery_store_sales_backend.Projection.IOrderProjection;
import com.example.grocery_store_sales_backend.model.Order;
import com.example.grocery_store_sales_backend.repository.IOrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class OrderService implements IOrderService{
    @Autowired
    private IOrderRepository orderRepository;
    @Override
    public Page<IOrderCustomerProjection> getOrderByCustomer(Integer id,int idType, Pageable pageable) {
        return orderRepository.getOrderByCustomer(id,idType,pageable);
    }

    @Override
    public Page<IOrderProjection> getOrdersManage(String name,String dateOne,String dateTwo, Pageable pageable) {
        if(dateTwo.equals("")){
            dateTwo=null;
        }
        if(dateOne.equals("")){
            dateOne=null;
        }
        return orderRepository.getManageOrder(name,dateOne,dateTwo,pageable);
    }

    @Override
    public Order saveOrder(Order order) {
        return orderRepository.save(order);
    }

    @Override
    public Page<IOrderProjection> getByIdOrderAll(Pageable pageable, Long id) {
        return orderRepository.getByIdOrderAll(id, pageable);
    }

    @Override
    public Optional<Order> findByIdOrder(Long id) {
        return orderRepository.findByIdAndAndFlagOrderIsFalse(id);
    }

    @Override
    public boolean updateStatusOrder(Long id, int type) {
        try {
            Order order = findByIdOrder(id).get();
            if (type > order.getStatusOrder().getId()) {
                orderRepository.updateStatusOrder(id, type);
            }
            return true;
        }catch (Exception e){
            return false;
        }

    }

}
