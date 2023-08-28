package com.example.grocery_store_sales_backend.model;

import javax.persistence.*;

@Entity
@Table(name = "orders")
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(nullable = false)
    private String dateOrder;
    private String noteOrder;
    @Column(columnDefinition = "int default 0")
    private boolean flagOrder;
    @ManyToOne
    private StatusOrder statusOrder;
    @ManyToOne
    private Customer customer;

    public Order() {
    }

    public Order(Long id, String dateOrder, String noteOrder, boolean flagOrder, StatusOrder statusOrder, Customer customer) {
        this.id = id;
        this.dateOrder = dateOrder;
        this.noteOrder = noteOrder;
        this.flagOrder = flagOrder;
        this.statusOrder = statusOrder;
        this.customer = customer;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getDateOrder() {
        return dateOrder;
    }

    public void setDateOrder(String dateOrder) {
        this.dateOrder = dateOrder;
    }

    public String getNoteOrder() {
        return noteOrder;
    }

    public void setNoteOrder(String noteOrder) {
        this.noteOrder = noteOrder;
    }

    public boolean isFlagOrder() {
        return flagOrder;
    }

    public void setFlagOrder(boolean flagOrder) {
        this.flagOrder = flagOrder;
    }

    public StatusOrder getStatusOrder() {
        return statusOrder;
    }

    public void setStatusOrder(StatusOrder statusOrder) {
        this.statusOrder = statusOrder;
    }

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }
}