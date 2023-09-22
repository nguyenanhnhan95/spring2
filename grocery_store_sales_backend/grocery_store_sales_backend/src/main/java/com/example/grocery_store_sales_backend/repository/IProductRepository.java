package com.example.grocery_store_sales_backend.repository;

import com.example.grocery_store_sales_backend.Projection.IProductProjection;
import com.example.grocery_store_sales_backend.model.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Repository
public interface IProductRepository extends JpaRepository<Product, Integer> {
    Optional<Product> getProductsByIdIsAndFlagProductFalse(Long id);

    @Query(value = "select products.id,brand_product as brandProduct,price_product as priceProduct,bonus_sale as bonusSale,img_product as imgProduct ,release_date as releaseDate ,quality_product as qualityProduct ,total_sold as totalSold  from\n" +
            "            products join type_product on type_product.id=products.type_product_id\n" +
            "            where products.type_product_id=:id and flag_product=0", nativeQuery = true)
    Page<IProductProjection> getAllProductByType(@Param("id") int id, Pageable pageable);

    @Query(value = "SELECT products.id, brand_product AS brandProduct, price_product AS priceProduct, bonus_sale AS bonusSale, img_product AS imgProduct, release_date AS releaseDate, total_sold AS totalSold, quality_product AS qualityProduct " +
            "FROM products " +
            "WHERE (products.brand_product LIKE CONCAT('%', :search, '%') AND :type = 0) OR (products.brand_product LIKE CONCAT('%', :search, '%') AND products.type_product_id = :type)", nativeQuery = true)
    Page<IProductProjection> searchNameProduct(@Param("type") int type, @Param("search") String search, Pageable pageable);

    @Query(value = "SELECT products.id, brand_product AS brandProduct, price_product AS priceProduct, bonus_sale AS bonusSale, img_product AS imgProduct, release_date AS releaseDate, total_sold AS totalSold, quality_product AS qualityProduct " +
            "FROM products " +
            "WHERE (products.brand_product LIKE CONCAT('%', :search, '%') AND :type = 0) OR (products.brand_product LIKE CONCAT('%', :search, '%') AND products.type_product_id = :type) " +
            "ORDER BY release_date DESC", nativeQuery = true)
    Page<IProductProjection> searchNewProduct(@Param("type") int type, @Param("search") String search, Pageable pageable);

    @Query(value = "SELECT products.id, products.brand_product AS brandProduct, products.price_product AS priceProduct,quality_product AS qualityProduct, products.bonus_sale AS bonusSale,\n" +
            "               products.img_product AS imgProduct, products.release_date AS releaseDate, products.total_sold AS totalSold\n" +
            "                     FROM products\n" +
            "\n" +
            "         WHERE ( MONTH(release_date) = MONTH(CURDATE()) AND (products.brand_product LIKE CONCAT('%', :search, '%') AND :type = 0) OR ( MONTH(release_date) = MONTH(CURDATE()) AND (products.brand_product LIKE CONCAT('%', :search, '%') and products.type_product_id = :type)))\n" +
            "             ORDER BY products.total_sold DESC", nativeQuery = true)
    Page<IProductProjection> searchPopularProduct(@Param("type") int type, @Param("search") String search, Pageable pageable);

    @Query(value = "SELECT products.id, products.brand_product AS brandProduct, products.price_product AS priceProduct, products.bonus_sale AS bonusSale, products.img_product AS imgProduct, products.release_date AS releaseDate, products.total_sold AS totalSold, products.quality_product AS qualityProduct " +
            "FROM products " +
            "WHERE (products.brand_product LIKE CONCAT('%', :search, '%') AND :type = 0) OR (products.brand_product LIKE CONCAT('%', :search, '%') AND products.type_product_id = :type) " +
            "ORDER BY products.total_sold DESC", nativeQuery = true)
    Page<IProductProjection> searchTopSaleProduct(@Param("type") int type,@Param("search") String search, Pageable pageable);
    @Transactional
    @Modifying
    @Query(value = "update products set quality_product = quality_product - :number, total_sold = total_sold + :number " +
            "where id = :id", nativeQuery = true)
    int updateQualityProductSold(@Param("number") int number, @Param("id") Long id);
    @Query(value = "SELECT p.id, p.brand_product AS brandProduct, p.price_product AS priceProduct, p.bonus_sale AS bonusSale, p.img_product AS imgProduct, p.release_date AS releaseDate, p.total_sold AS totalSold, p.quality_product AS qualityProduct, SUM(p.price_product*(1-p.bonus_sale)) AS price " +
            "FROM products p " +
            "WHERE (p.brand_product LIKE CONCAT('%', :search, '%') AND :type = 0) OR (p.brand_product LIKE CONCAT('%', :search, '%') AND p.type_product_id = :type) " +
            "GROUP BY p.id " +
            "ORDER BY price ASC", nativeQuery = true)
    Page<IProductProjection> sortDecreasePrice(@Param("search") String search, @Param("type") Integer type, Pageable pageable);
    @Query(value = "SELECT p.id, p.brand_product AS brandProduct, p.price_product AS priceProduct, p.bonus_sale AS bonusSale, p.img_product AS imgProduct, p.release_date AS releaseDate, p.total_sold AS totalSold, p.quality_product AS qualityProduct, SUM(p.price_product*(1-p.bonus_sale)) AS price " +
            "FROM products p " +
            "WHERE (p.brand_product LIKE CONCAT('%', :search, '%') AND :type = 0) OR (p.brand_product LIKE CONCAT('%', :search, '%') AND p.type_product_id = :type) " +
            "GROUP BY p.id " +
            "ORDER BY price DESC ", nativeQuery = true)
    Page<IProductProjection> sortAscendingPrice(@Param("search") String search, @Param("type") Integer type, Pageable pageable);
}
