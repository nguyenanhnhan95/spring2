package com.example.grocery_store_sales_backend.model;

import javax.persistence.*;

@Entity
@Table(name = "employees")
public class Employee {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column(nullable = false)
    private String nameEmployee;
    @Column(nullable = false)
    private  String birthEmployee;
    @Column(nullable = false)
    private String emailEmployee;
    @Column(nullable = false)
    private boolean genderEmployee;
    @Column(nullable = false)
    private int idCardEmployee;
    @Column(nullable = false)
    private String addressEmployee;
    @Column(nullable = false)
    private String imgEmployee;
    @Column(nullable = false)
    private String phoneEmployee;
    @Column(columnDefinition = "int default 0")
    private boolean flagEmployee;
    @OneToOne
    private Account account;

    public Employee() {
    }

    public Employee(int id, String nameEmployee, String birthEmployee, String emailEmployee, boolean genderEmployee, int idCardEmployee, String addressEmployee, String imgEmployee, String phoneEmployee, boolean flagEmployee, Account account) {
        this.id = id;
        this.nameEmployee = nameEmployee;
        this.birthEmployee = birthEmployee;
        this.emailEmployee = emailEmployee;
        this.genderEmployee = genderEmployee;
        this.idCardEmployee = idCardEmployee;
        this.addressEmployee = addressEmployee;
        this.imgEmployee = imgEmployee;
        this.phoneEmployee = phoneEmployee;
        this.flagEmployee = flagEmployee;
        this.account = account;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNameEmployee() {
        return nameEmployee;
    }

    public void setNameEmployee(String nameEmployee) {
        this.nameEmployee = nameEmployee;
    }

    public String getBirthEmployee() {
        return birthEmployee;
    }

    public void setBirthEmployee(String birthEmployee) {
        this.birthEmployee = birthEmployee;
    }

    public String getEmailEmployee() {
        return emailEmployee;
    }

    public void setEmailEmployee(String emailEmployee) {
        this.emailEmployee = emailEmployee;
    }

    public boolean isGenderEmployee() {
        return genderEmployee;
    }

    public void setGenderEmployee(boolean genderEmployee) {
        this.genderEmployee = genderEmployee;
    }

    public int getIdCardEmployee() {
        return idCardEmployee;
    }

    public void setIdCardEmployee(int idCardEmployee) {
        this.idCardEmployee = idCardEmployee;
    }

    public String getAddressEmployee() {
        return addressEmployee;
    }

    public void setAddressEmployee(String addressEmployee) {
        this.addressEmployee = addressEmployee;
    }

    public String getImgEmployee() {
        return imgEmployee;
    }

    public void setImgEmployee(String imgEmployee) {
        this.imgEmployee = imgEmployee;
    }

    public String getPhoneEmployee() {
        return phoneEmployee;
    }

    public void setPhoneEmployee(String phoneEmployee) {
        this.phoneEmployee = phoneEmployee;
    }

    public boolean isFlagEmployee() {
        return flagEmployee;
    }

    public void setFlagEmployee(boolean flagEmployee) {
        this.flagEmployee = flagEmployee;
    }

    public Account getAccount() {
        return account;
    }

    public void setAccount(Account account) {
        this.account = account;
    }
}
