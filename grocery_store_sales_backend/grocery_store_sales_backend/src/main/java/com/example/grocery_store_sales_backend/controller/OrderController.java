package com.example.grocery_store_sales_backend.controller;

import com.example.grocery_store_sales_backend.Projection.IOrderCustomerProjection;
import com.example.grocery_store_sales_backend.Projection.IOrderProjection;
import com.example.grocery_store_sales_backend.service.IOrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.query.Param;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/orders")
public class OrderController {
    @Autowired
    private IOrderService orderService;
    @GetMapping("")
    public ResponseEntity<Page<IOrderCustomerProjection>> getOrderCustomer(@Param("id")String id ,@Param("idType") String idType, Pageable pageable){
        System.out.println(id);
        if(orderService.getOrderByCustomer(Integer.valueOf(id), Integer.parseInt(idType),pageable).isEmpty()){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }else {
            return new ResponseEntity<>(orderService.getOrderByCustomer(Integer.valueOf(id), Integer.parseInt(idType),pageable),HttpStatus.OK);
        }
    }
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @GetMapping("/manage")
    public ResponseEntity<Page<IOrderProjection>> getOrderManage(@Param("name")String name, Pageable pageable){
        if(orderService.getOrdersManage(name,pageable).isEmpty()){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }else {
            return new ResponseEntity<>(orderService.getOrdersManage(name,pageable),HttpStatus.OK);
        }
    }
//    @PreAuthorize("hasRole('ROLE_USER')")

}
