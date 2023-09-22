package com.example.grocery_store_sales_backend.Projection;

public interface IOrderProjection {
    Long getId();

    String getNameUser();

    String getAddressUser();

    String getNameProduct();

    String getImgProduct();

    Integer getNumberDetail();

    Integer getIdUser();

    Long getPriceProduct();

    Double getBonusSale();

    String getNameStatus();

    String getDateOrder();

    Long getTotalPrice();
}

