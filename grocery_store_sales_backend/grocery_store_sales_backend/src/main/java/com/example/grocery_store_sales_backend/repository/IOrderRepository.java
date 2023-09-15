package com.example.grocery_store_sales_backend.repository;

import com.example.grocery_store_sales_backend.Projection.IOrderCustomerProjection;
import com.example.grocery_store_sales_backend.Projection.IOrderProjection;
import com.example.grocery_store_sales_backend.model.Order;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface IOrderRepository extends JpaRepository<Order,Long> {
    @Query(value = "select order_id as id,brand_product as nameProduct,img_product as imgProduct,number_detail\n" +
            "           as numberDetail,price_product as priceProduct,bonus_sale as bonusSale, \n" +
            "                      name_status as nameStatus from orders\n" +
            "             join order_detail od on orders.id = od.order_id\n" +
            "                 join products p on p.id = od.product_id\n" +
            "               join status_order so on so.id = orders.status_order_id           \n" +
            "                where users_id=:id and status_order_id=:idType",nativeQuery = true)
    Page<IOrderCustomerProjection> getOrderByCustomer(@Param("id")Integer id,@Param("idType") int idType, Pageable pageable);
    @Query(value = "SELECT orders.id,name_user AS nameUser,address_user AS addressUser,\n" +
            "date_order AS dateOrder,name_status AS nameStatus,SUM(p.price_product*(1-p.bonus_sale)) AS totalPrice\n" +
            "    FROM orders\n" +
            "JOIN users u ON u.id = orders.users_id\n" +
            "JOIN status_order so ON so.id = orders.status_order_id\n" +
            "JOIN order_detail od ON orders.id = od.order_id\n" +
            "JOIN products p ON p.id = od.product_id\n" +
            "where name_user like concat('%',:name,'%')\n" +
            "GROUP BY id, name_user, address_user, date_order, name_status",nativeQuery = true)
    Page<IOrderProjection> getManageOrder(@Param("name")String name, Pageable pageable);
}
