package com.example.grocery_store_sales_backend.repository;

import com.example.grocery_store_sales_backend.model.StatusOrder;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IStatusOrderRepository extends JpaRepository<StatusOrder,Integer> {

}
