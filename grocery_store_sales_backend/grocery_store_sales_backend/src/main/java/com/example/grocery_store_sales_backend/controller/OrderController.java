package com.example.grocery_store_sales_backend.controller;

import com.example.grocery_store_sales_backend.Projection.IOrderCustomerProjection;
import com.example.grocery_store_sales_backend.Projection.IOrderProjection;
import com.example.grocery_store_sales_backend.model.Order;
import com.example.grocery_store_sales_backend.service.IOrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.query.Param;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

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
    public ResponseEntity<Page<IOrderProjection>> getOrderManage(@RequestParam("page")String page,@Param("name")String name,@RequestParam("dateOne")String dateOne,@RequestParam("dateTwo") String dateTwo){
        Pageable pageable= PageRequest.of(Integer.parseInt(page),5);
        if(orderService.getOrdersManage(name,dateOne,dateTwo,pageable).isEmpty()){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }else {
            return new ResponseEntity<>(orderService.getOrdersManage(name,dateOne,dateTwo,pageable),HttpStatus.OK);
        }
    }
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @GetMapping("/information")
    public ResponseEntity<Page<IOrderProjection>> getOrderByIdManage(@RequestParam("id")String id,Pageable pageable){
        System.out.println(id);
        if(orderService.getByIdOrderAll(pageable, Long.valueOf(id)).isEmpty()){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }else {
            return new ResponseEntity<>(orderService.getByIdOrderAll(pageable, Long.valueOf(id)),HttpStatus.OK);
        }
    }
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @PatchMapping("/update")
    public ResponseEntity<?> getUpdateStatusOrder(@RequestParam("id")String id,@RequestParam("type")String type){
        if(orderService.updateStatusOrder(Long.parseLong(id),Integer.parseInt(type))){
            return new ResponseEntity<>(HttpStatus.OK);
        }else {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }


}
