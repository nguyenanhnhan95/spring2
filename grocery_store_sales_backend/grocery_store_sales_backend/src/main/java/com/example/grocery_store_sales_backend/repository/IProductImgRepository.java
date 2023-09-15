package com.example.grocery_store_sales_backend.repository;

import com.example.grocery_store_sales_backend.Projection.ImgProductProjection;
import com.example.grocery_store_sales_backend.model.ImgProduct;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface IProductImgRepository extends JpaRepository<ImgProduct,Long> {
    @Query(value = "select id, img_products as imgProducts from img_product where img_product.product_id=:id",nativeQuery = true)
    List<ImgProductProjection> findAllByProductId(@Param("id") Long id);
}
