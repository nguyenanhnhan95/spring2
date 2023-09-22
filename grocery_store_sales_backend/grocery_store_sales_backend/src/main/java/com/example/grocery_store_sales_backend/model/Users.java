package com.example.grocery_store_sales_backend.model;

import javax.persistence.*;

@Entity
@Table(name = "users")
public class Users {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Column(nullable = false)
    private String nameUser;
    @Column(nullable = false)
    private  String birthUser;
    @Column(nullable = false)
    private String emailUser;
    @Column(nullable = false)
    private Boolean genderUser;
    @Column(nullable = false)
    private String idCardUser;
    @Column(nullable = false)
    private String addressUser;
    @Column(columnDefinition = "double default 0.0")
    private Double accumulatedPoints;
    @Column(nullable = false)
    private String imgUser;
    @Column(nullable = false)
    private String phoneUser;
    @Column(columnDefinition = "int default 0")
    private boolean flagUser;
    @OneToOne
    private Account account;

    public Users() {
    }

    public Users(Integer id, String nameUser, String birthUser, String emailUser, Boolean genderUser, String idCardUser, String addressUser, Double accumulatedPoints, String imgUser, String phoneUser, boolean flagUser, Account account) {
        this.id = id;
        this.nameUser = nameUser;
        this.birthUser = birthUser;
        this.emailUser = emailUser;
        this.genderUser = genderUser;
        this.idCardUser = idCardUser;
        this.addressUser = addressUser;
        this.accumulatedPoints = accumulatedPoints;
        this.imgUser = imgUser;
        this.phoneUser = phoneUser;
        this.flagUser = flagUser;
        this.account = account;
    }

    public Boolean getGenderUser() {
        return genderUser;
    }

    public void setGenderUser(Boolean genderUser) {
        this.genderUser = genderUser;
    }

    public Double getAccumulatedPoints() {
        return accumulatedPoints;
    }

    public void setAccumulatedPoints(Double accumulatedPoints) {
        this.accumulatedPoints = accumulatedPoints;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getNameUser() {
        return nameUser;
    }

    public void setNameUser(String nameUser) {
        this.nameUser = nameUser;
    }

    public String getBirthUser() {
        return birthUser;
    }

    public void setBirthUser(String birthUser) {
        this.birthUser = birthUser;
    }

    public String getEmailUser() {
        return emailUser;
    }

    public void setEmailUser(String emailUser) {
        this.emailUser = emailUser;
    }

    public boolean isGenderUser() {
        return genderUser;
    }

    public void setGenderUser(boolean genderUser) {
        this.genderUser = genderUser;
    }

    public String getIdCardUser() {
        return idCardUser;
    }

    public void setIdCardUser(String idCardUser) {
        this.idCardUser = idCardUser;
    }

    public String getAddressUser() {
        return addressUser;
    }

    public void setAddressUser(String addressUser) {
        this.addressUser = addressUser;
    }

    public String getImgUser() {
        return imgUser;
    }

    public void setImgUser(String imgUser) {
        this.imgUser = imgUser;
    }

    public String getPhoneUser() {
        return phoneUser;
    }

    public void setPhoneUser(String phoneUser) {
        this.phoneUser = phoneUser;
    }

    public boolean isFlagUser() {
        return flagUser;
    }

    public void setFlagUser(boolean flagUser) {
        this.flagUser = flagUser;
    }

    public Account getAccount() {
        return account;
    }

    public void setAccount(Account account) {
        this.account = account;
    }
}
