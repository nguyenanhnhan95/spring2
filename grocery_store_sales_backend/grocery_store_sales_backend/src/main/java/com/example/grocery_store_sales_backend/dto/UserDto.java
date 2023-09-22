package com.example.grocery_store_sales_backend.dto;

import com.example.grocery_store_sales_backend.model.Account;


public class UserDto {

    private String nameUser;

    private  String birthUser;

    private String emailUser;

    private Boolean genderUser;

    private String idCardUser;

    private String addressUser;

    private String imgUser;

    private String phoneUser;

    private boolean flagUser;


    private String password;

    public UserDto() {
    }

    public UserDto(String nameUser, String birthUser, String emailUser, Boolean genderUser, String idCardUser, String addressUser, String imgUser, String phoneUser, boolean flagUser, String password) {
        this.nameUser = nameUser;
        this.birthUser = birthUser;
        this.emailUser = emailUser;
        this.genderUser = genderUser;
        this.idCardUser = idCardUser;
        this.addressUser = addressUser;
        this.imgUser = imgUser;
        this.phoneUser = phoneUser;
        this.flagUser = flagUser;
        this.password = password;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
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

    public Boolean getGenderUser() {
        return genderUser;
    }

    public void setGenderUser(Boolean genderUser) {
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

}
