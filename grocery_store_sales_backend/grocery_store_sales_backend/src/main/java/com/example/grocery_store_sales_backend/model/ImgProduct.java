package com.example.grocery_store_sales_backend.model;

import javax.persistence.*;

@Entity
@Table
public class ImgProduct {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String ImgProducts;
    @ManyToOne
    private Product product;

    public ImgProduct() {
    }

    public ImgProduct(Long id, String imgProducts, Product product) {
        this.id = id;
        ImgProducts = imgProducts;
        this.product = product;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getImgProducts() {
        return ImgProducts;
    }

    public void setImgProducts(String imgProducts) {
        ImgProducts = imgProducts;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }
}
