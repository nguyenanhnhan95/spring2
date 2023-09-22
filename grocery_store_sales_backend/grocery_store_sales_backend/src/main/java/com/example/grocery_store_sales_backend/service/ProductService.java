package com.example.grocery_store_sales_backend.service;

import com.example.grocery_store_sales_backend.Projection.IProductProjection;
import com.example.grocery_store_sales_backend.model.Product;
import com.example.grocery_store_sales_backend.repository.IProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductService implements IProductService {
    @Autowired
    private IProductRepository productRepository;

    @Override
    public Optional<Product> getProduct(Long id) {
        return productRepository.getProductsByIdIsAndFlagProductFalse(id);
    }

    @Override
    public Page<IProductProjection> getProducts(Pageable pageable, Integer type, String search, Integer searchStatus,Integer sort) {
        if(sort==0){
            switch (searchStatus) {
                case 1:
                    return productRepository.searchPopularProduct(type,search,pageable);
                case 2:
                    return productRepository.searchNewProduct(type,search,pageable);
                case 3:
                    return productRepository.searchTopSaleProduct(type,search,pageable);
                default:
                    return productRepository.searchNameProduct(type,search,pageable);
            }
        }else if(sort==1){
            return productRepository.sortAscendingPrice(search,type,pageable);
        }else {
            return productRepository.sortDecreasePrice(search,type,pageable);
        }


    }

    @Override
    public Page<IProductProjection> getAllProductByType(int id, Pageable pageable) {
        return productRepository.getAllProductByType(id, pageable);
    }

    @Override
    public boolean updateNumberOfProductSold(int number, Long idProduct) {
        if (productRepository.updateQualityProductSold(number, idProduct) != 0) {
            return true;
        } else {

            return false;
        }

    }
}
