package com.example.grocery_store_sales_backend.model;

import javax.persistence.*;

@Entity
public class OrderDetail {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(columnDefinition = "int default 1")
    private int numberDetail;
    @Column(columnDefinition = "int default 0")
    private boolean statusBooking;
    @ManyToOne
    private Order order;
    @ManyToOne
    private Product product;

    public OrderDetail() {
    }

    public OrderDetail(Long id, int numberDetail, boolean statusBooking, Order order, Product product) {
        this.id = id;
        this.numberDetail = numberDetail;
        this.statusBooking = statusBooking;
        this.order = order;
        this.product = product;
    }

    public OrderDetail(int numberDetail, boolean statusBooking, Order order, Product product) {
        this.numberDetail = numberDetail;
        this.statusBooking = statusBooking;
        this.order = order;
        this.product = product;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public int getNumberDetail() {
        return numberDetail;
    }

    public void setNumberDetail(int numberDetail) {
        this.numberDetail = numberDetail;
    }

    public boolean isStatusBooking() {
        return statusBooking;
    }

    public void setStatusBooking(boolean statusBooking) {
        this.statusBooking = statusBooking;
    }

    public Order getOrder() {
        return order;
    }

    public void setOrder(Order order) {
        this.order = order;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }
}
