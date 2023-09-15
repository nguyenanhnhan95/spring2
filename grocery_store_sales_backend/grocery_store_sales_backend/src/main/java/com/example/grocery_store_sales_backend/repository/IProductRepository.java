package com.example.grocery_store_sales_backend.repository;

import com.example.grocery_store_sales_backend.Projection.IProductProjection;
import com.example.grocery_store_sales_backend.model.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface IProductRepository extends JpaRepository<Product, Integer> {
    Optional<Product> getProductsByIdIsAndFlagProductFalse(Long id);

    @Query(value = "select products.id,brand_product as brandProduct,price_product as priceProduct,bonus_sale as bonusSale,img_product as imgProduct from\n" +
            "            products join type_product on type_product.id=products.type_product_id\n" +
            "            where products.type_product_id=:id and flag_product=0", nativeQuery = true)
    Page<IProductProjection> getAllProductByType(@Param("id") int id, Pageable pageable);

    @Query(value = "select products.id, brand_product as brandProduct, price_product as priceProduct, bonus_sale as bonusSale, img_product as imgProduct " +
            "from products where products.brand_product like concat('%', :search, '%')", nativeQuery = true)
    Page<IProductProjection> searchNameProduct(Pageable pageable, @Param("search") String search);

    @Query(value = "select products.id, brand_product as brandProduct, price_product as priceProduct, bonus_sale as bonusSale, img_product as imgProduct " +
            "from products ORDER BY release_date DESC", nativeQuery = true)
    Page<IProductProjection> searchNewProduct(Pageable pageable);

    @Query(value = "select products.id, products.brand_product as brandProduct, products.price_product as priceProduct, products.bonus_sale as bonusSale,\n" +
            "       products.img_product  as imgProduct ,sum(number_detail) as totalSold  from products\n" +
            "join order_detail od on products.id = od.product_id\n" +
            "join products p on p.id = od.product_id\n" +
            "join orders o on o.id = od.order_id\n" +
            "where MONTH(o.date_order) =MONTH(CURDATE())\n" +
            "group by p.id\n" +
            "order by totalSold desc", nativeQuery = true)
    Page<IProductProjection> searchPopularProduct(Pageable pageable);

    @Query(value = "select products.id, products.brand_product as brandProduct, products.price_product as priceProduct, products.bonus_sale as bonusSale,\n" +
            "       products.img_product  as imgProduct ,sum(number_detail) as totalSold  from products\n" +
            "join order_detail od on products.id = od.product_id\n" +
            "join products p on p.id = od.product_id\n" +
            "group by p.id order by totalSold desc",nativeQuery = true)
    Page<IProductProjection> searchTopSaleProduct(Pageable pageable);
}
