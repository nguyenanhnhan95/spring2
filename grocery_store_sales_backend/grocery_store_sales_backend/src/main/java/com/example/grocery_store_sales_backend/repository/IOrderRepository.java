package com.example.grocery_store_sales_backend.repository;

import com.example.grocery_store_sales_backend.Projection.IOrderCustomerProjection;
import com.example.grocery_store_sales_backend.Projection.IOrderProjection;
import com.example.grocery_store_sales_backend.model.Order;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.Optional;

@Repository
public interface IOrderRepository extends JpaRepository<Order,Long> {
    @Query(value = "select order_id as id,brand_product as nameProduct,img_product as imgProduct,number_detail\n" +
            "           as numberDetail,price_product as priceProduct,bonus_sale as bonusSale, \n" +
            "                      name_status as nameStatus from orders\n" +
            "             join order_detail od on orders.id = od.order_id\n" +
            "                 join products p on p.id = od.product_id\n" +
            "               join status_order so on so.id = orders.status_order_id           \n" +
            "                where users_id=:id and status_order_id=:idType" +
            "              order by order_id desc ",nativeQuery = true)
    Page<IOrderCustomerProjection> getOrderByCustomer(@Param("id")Integer id,@Param("idType") int idType, Pageable pageable);
    @Query(value = "SELECT o.id, u.name_user AS nameUser, u.address_user AS addressUser, o.date_order AS dateOrder, so.name_status AS nameStatus, o.total_price AS totalPrice " +
            "FROM orders o " +
            "JOIN users u ON u.id = o.users_id " +
            "JOIN status_order so ON so.id = o.status_order_id " +
            "WHERE u.name_user LIKE CONCAT('%', :name, '%') " +
            "AND (:dateOne IS NULL OR o.date_order >= :dateOne) " +
            "AND (:dateTwo IS NULL OR o.date_order <= :dateTwo)", nativeQuery = true)
    Page<IOrderProjection> getManageOrder(@Param("name") String name, @Param("dateOne") String dateOne, @Param("dateTwo") String dateTwo, Pageable pageable);
    @Query(value = "SELECT o.id AS id, p.brand_product AS nameProduct, p.img_product AS imgProduct, od.number_detail AS numberDetail, " +
            "p.price_product AS priceProduct, p.bonus_sale AS bonusSale, u.id AS idUser FROM orders o JOIN order_detail od ON o.id = od.order_id " +
            "JOIN products p ON p.id = od.product_id JOIN users u ON u.id = o.users_id WHERE o.id = :id", nativeQuery = true)
    Page<IOrderProjection> getByIdOrderAll(@Param("id") Long id, Pageable pageable);
    Optional<Order> findByIdAndAndFlagOrderIsFalse(Long id);
    @Transactional
    @Modifying
    @Query(value = "update orders\n" +
            "set status_order_id=:type\n" +
            "where id =:id",nativeQuery = true)
    void updateStatusOrder(@Param("id") Long id,@Param("type") int type);
}
