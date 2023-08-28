package com.example.grocery_store_sales_backend.model;

import javax.persistence.*;

@Entity
@Table(name = "customers")
public class Customer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(nullable = false)
    private String nameCustomer;
    @Column(nullable = false)
    private String birthCustomer;
    @Column(nullable = false)
    private String emailCustomer;
    @Column(nullable = false)
    private String genderCustomer;
    @Column(nullable = false)
    private String idCardCustomer;
    @Column(nullable = false)
    private String addressCustomer;
    @Column(nullable = false)
    private String imgCustomer;
    @Column(nullable = false)
    private String phoneCustomer;
    @Column(columnDefinition = "int default 0")
    private boolean flagCustomer;
    @OneToOne
    private Account account;

    public Customer() {
    }

    public Customer(Long id, String nameCustomer, String birthCustomer, String emailCustomer, String genderCustomer, String idCardCustomer, String addressCustomer, String imgCustomer, String phoneCustomer, boolean flagCustomer, Account account) {
        this.id = id;
        this.nameCustomer = nameCustomer;
        this.birthCustomer = birthCustomer;
        this.emailCustomer = emailCustomer;
        this.genderCustomer = genderCustomer;
        this.idCardCustomer = idCardCustomer;
        this.addressCustomer = addressCustomer;
        this.imgCustomer = imgCustomer;
        this.phoneCustomer = phoneCustomer;
        this.flagCustomer = flagCustomer;
        this.account = account;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNameCustomer() {
        return nameCustomer;
    }

    public void setNameCustomer(String nameCustomer) {
        this.nameCustomer = nameCustomer;
    }

    public String getBirthCustomer() {
        return birthCustomer;
    }

    public void setBirthCustomer(String birthCustomer) {
        this.birthCustomer = birthCustomer;
    }

    public String getEmailCustomer() {
        return emailCustomer;
    }

    public void setEmailCustomer(String emailCustomer) {
        this.emailCustomer = emailCustomer;
    }

    public String getGenderCustomer() {
        return genderCustomer;
    }

    public void setGenderCustomer(String genderCustomer) {
        this.genderCustomer = genderCustomer;
    }

    public String getIdCardCustomer() {
        return idCardCustomer;
    }

    public void setIdCardCustomer(String idCardCustomer) {
        this.idCardCustomer = idCardCustomer;
    }

    public String getAddressCustomer() {
        return addressCustomer;
    }

    public void setAddressCustomer(String addressCustomer) {
        this.addressCustomer = addressCustomer;
    }

    public String getImgCustomer() {
        return imgCustomer;
    }

    public void setImgCustomer(String imgCustomer) {
        this.imgCustomer = imgCustomer;
    }

    public String getPhoneCustomer() {
        return phoneCustomer;
    }

    public void setPhoneCustomer(String phoneCustomer) {
        this.phoneCustomer = phoneCustomer;
    }

    public boolean isFlagCustomer() {
        return flagCustomer;
    }

    public void setFlagCustomer(boolean flagCustomer) {
        this.flagCustomer = flagCustomer;
    }

    public Account getAccount() {
        return account;
    }

    public void setAccount(Account account) {
        this.account = account;
    }
}
