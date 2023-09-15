package com.example.grocery_store_sales_backend.model;

import java.io.Serializable;

/*
This is class is required for creating a response containing the JWT to be returned to the user.
 */
public class JwtResponse implements Serializable {

    private static final long serialVersionUID = -8091879091924046844L;
    private final Integer id;
    private final String jwttoken;
    private final String avatar;
    private final String email;
    private final String nameRole;
    private final  String nameUser;


    public JwtResponse(Integer id,String jwttoken, String avatar, String email, String nameRole, String nameUser) {
        this.id=id;
        this.jwttoken = jwttoken;
        this.avatar = avatar;
        this.email = email;
        this.nameRole = nameRole;
        this.nameUser = nameUser;
    }

    public Integer getId() {
        return id;
    }

    public String getAvatar() {
        return avatar;
    }

    public String getNameRole() {
        return nameRole;
    }

    public String getEmail() {
        return email;
    }

    public String getToken() {
        return this.jwttoken;
    }

    public String getNameUser() {
        return nameUser;
    }
}
