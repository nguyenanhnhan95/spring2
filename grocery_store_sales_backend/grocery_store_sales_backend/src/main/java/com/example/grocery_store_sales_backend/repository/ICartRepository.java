package com.example.grocery_store_sales_backend.repository;

import com.example.grocery_store_sales_backend.model.CartDetail;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Repository
public interface ICartRepository extends JpaRepository<CartDetail,Long> {

    List<CartDetail> findAllByFlagCartIsFalseAndUsers_Id(Integer id);
    List<CartDetail> findAllByFlagCartIsFalseAndProduct_Id(Long id);
    @Modifying
    @Transactional
    @Query(value = "delete from cart_detail where id = :id and users_id = :idUser", nativeQuery = true)
    int deleteCartDetail(@Param("id") Long id, @Param("idUser") Integer idUser);

    @Override
    Optional<CartDetail> findById(Long id);
    @Modifying
    @Transactional
    @Query(value = "update cart_detail\n" +
            "set number_cart=:#{#cartDetail.numberCart} where id=:#{#cartDetail.id}", nativeQuery = true)
    int updateNumberCart(@Param("cartDetail") CartDetail cartDetail);
    @Modifying
    @Transactional
    @Query(value = "delete from cart_detail where  users_id = :idUser",nativeQuery = true)
    int deleteCartsByIdUser(@Param("idUser")Integer idUser);
}
