package com.example.grocery_store_sales_backend.model;

import javax.persistence.*;

@Entity
public class StatusOrder {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column(nullable = false)
    private String nameStatus;

    public StatusOrder() {
    }

    public StatusOrder(int id, String nameStatus) {
        this.id = id;
        this.nameStatus = nameStatus;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNameStatus() {
        return nameStatus;
    }

    public void setNameStatus(String nameStatus) {
        this.nameStatus = nameStatus;
    }
}
