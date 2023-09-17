package com.example.grocery_store_sales_backend.Projection;

public interface IProductProjection {
    Long getId();
    String getImgProduct();
    String getBrandProduct();
    Long getPriceProduct();
    Double getBonusSale();
    Long getTotalSold();
}
