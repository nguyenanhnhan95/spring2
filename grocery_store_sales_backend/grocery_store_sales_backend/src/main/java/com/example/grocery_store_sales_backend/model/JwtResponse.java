package com.example.grocery_store_sales_backend.model;

import java.io.Serializable;

/*
This is class is required for creating a response containing the JWT to be returned to the user.
 */
public class JwtResponse implements Serializable {

    private static final long serialVersionUID = -8091879091924046844L;
    private final Integer id;
    private final String jwttoken;
    private final String email;
    private final String nameUser;
    private final String avatar;
    private final String nameRole;

    public JwtResponse(Integer id,String jwttoken,  String email,String nameUser,String avatar,String nameRole) {
        this.id=id;
        this.jwttoken = jwttoken;
        this.email = email;
        this.nameUser=nameUser;
        this.avatar=avatar;
        this.nameRole=nameRole;
    }

    public String getNameRole() {
        return nameRole;
    }

    public Integer getId() {
        return id;
    }

    public String getNameUser() {
        return nameUser;
    }

    public String getJwttoken() {
        return jwttoken;
    }

    public String getAvatar() {
        return avatar;
    }

    public String getEmail() {
        return email;
    }
}
