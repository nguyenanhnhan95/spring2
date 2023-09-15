package com.example.grocery_store_sales_backend.service;

import com.example.grocery_store_sales_backend.model.CartDetail;
import com.example.grocery_store_sales_backend.repository.ICartRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CartService implements ICartService{
    @Autowired
    private ICartRepository cartRepository;
    @Autowired IProductService productService;
    @Override
    public List<CartDetail> getCarts(Integer id) {
        return cartRepository.findAllByFlagCartIsFalseAndUsers_Id(id);
    }

    @Override
    public List<CartDetail> getCartsByIdProduct(Long id) {
        return cartRepository.findAllByFlagCartIsFalseAndProduct_Id(id);
    }

    @Override
    public boolean deleteCard(Long id, Integer idUser) {
        if(cartRepository.deleteCartDetail(id,idUser)==0){
            return false;
        }
        else {
            cartRepository.deleteCartDetail(id,idUser);
            return true;
        }
    }

    @Override
    public Optional<CartDetail> findById(Long id) {
        return cartRepository.findById(id);
    }


    @Override
    public CartDetail saveCard(CartDetail cartDetail) {
        try {
            return cartRepository.save(cartDetail);
            // Xử lý thành công
        } catch (DataAccessException e) {
            // Xử lý lỗi
            e.printStackTrace();
            return null;
        }
    }

    @Override
    public boolean updateCard(CartDetail cartDetail) {
        int index;
        if(cartDetail.getNumberCart()<1){
            cartDetail.setNumberCart(1);
        }else {
            Long numberProduct= productService.getProduct(cartDetail.getProduct().getId()).get().getQualityProduct();
            if( cartDetail.getNumberCart()> numberProduct){
                cartDetail.setNumberCart(Math.toIntExact(numberProduct));
            }
        }
        if(cartRepository.updateNumberCart(cartDetail)!=0) {
            return true;
        }else {
            return false;
        }
    }
}
