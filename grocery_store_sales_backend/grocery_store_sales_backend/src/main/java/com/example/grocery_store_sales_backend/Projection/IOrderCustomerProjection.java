package com.example.grocery_store_sales_backend.Projection;

public interface IOrderCustomerProjection {
    Long getId();
    String getNameProduct();
    String getImgProduct();
    String getNumberDetail();
    Long getPriceProduct();
    Double getBonusSale();
    String getNameStatus();

}
