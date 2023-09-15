package com.example.grocery_store_sales_backend.model;

import javax.persistence.*;

@Entity
public class CartDetail {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(columnDefinition = "int default 1")
    private int numberCart;
    @Column(columnDefinition = "int default 0")
    private boolean flagCart;
    @ManyToOne
    private Users users;
    @ManyToOne
    private Product product;

    public CartDetail() {
    }

    public CartDetail(Long id, int numberCart, boolean flagCart, Users users, Product product) {
        this.id = id;
        this.numberCart = numberCart;
        this.flagCart = flagCart;
        this.users = users;
        this.product = product;
    }

    public Users getUsers() {
        return users;
    }

    public void setUsers(Users users) {
        this.users = users;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public int getNumberCart() {
        return numberCart;
    }

    public void setNumberCart(int numberCart) {
        this.numberCart = numberCart;
    }

    public boolean isFlagCart() {
        return flagCart;
    }

    public void setFlagCart(boolean flagCart) {
        this.flagCart = flagCart;
    }

    public Users getUser() {
        return users;
    }

    public void setUser(Users users) {
        this.users = users;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }
}
