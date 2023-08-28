package com.example.grocery_store_sales_backend.model;

import javax.persistence.*;

@Entity
@Table(name = "products")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private  Long id;
    @Column(nullable = false)
    private String nameProduct;
    @Column(columnDefinition = "longtext")
    private String detailProduct;
    private String ingredientProduct;
    private String instructionProduct;
    private String preservationProduct;
    @Column(nullable = false)
    private String brandProduct;
    @Column(nullable = false)
    private String manufactureProduct;
    @Column(nullable = false)
    private Long priceProduct;
    @Column(nullable = false)
    private  Long qualityProduct;
    private Double bonusSale;
    @Column(columnDefinition = "int default 0")
    private boolean flagProduct;
    @ManyToOne
    private TypeProduct typeProduct;

    public Product() {
    }

    public Product(Long id, String nameProduct, String detailProduct, String ingredientProduct, String instructionProduct, String preservationProduct, String brandProduct, String manufactureProduct, Long priceProduct, Long qualityProduct, Double bonusSale, boolean flagProduct, TypeProduct typeProduct) {
        this.id = id;
        this.nameProduct = nameProduct;
        this.detailProduct = detailProduct;
        this.ingredientProduct = ingredientProduct;
        this.instructionProduct = instructionProduct;
        this.preservationProduct = preservationProduct;
        this.brandProduct = brandProduct;
        this.manufactureProduct = manufactureProduct;
        this.priceProduct = priceProduct;
        this.qualityProduct = qualityProduct;
        this.bonusSale = bonusSale;
        this.flagProduct = flagProduct;
        this.typeProduct = typeProduct;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNameProduct() {
        return nameProduct;
    }

    public void setNameProduct(String nameProduct) {
        this.nameProduct = nameProduct;
    }

    public String getDetailProduct() {
        return detailProduct;
    }

    public void setDetailProduct(String detailProduct) {
        this.detailProduct = detailProduct;
    }

    public String getIngredientProduct() {
        return ingredientProduct;
    }

    public void setIngredientProduct(String ingredientProduct) {
        this.ingredientProduct = ingredientProduct;
    }

    public String getInstructionProduct() {
        return instructionProduct;
    }

    public void setInstructionProduct(String instructionProduct) {
        this.instructionProduct = instructionProduct;
    }

    public String getPreservationProduct() {
        return preservationProduct;
    }

    public void setPreservationProduct(String preservationProduct) {
        this.preservationProduct = preservationProduct;
    }

    public String getBrandProduct() {
        return brandProduct;
    }

    public void setBrandProduct(String brandProduct) {
        this.brandProduct = brandProduct;
    }

    public String getManufactureProduct() {
        return manufactureProduct;
    }

    public void setManufactureProduct(String manufactureProduct) {
        this.manufactureProduct = manufactureProduct;
    }

    public Long getPriceProduct() {
        return priceProduct;
    }

    public void setPriceProduct(Long priceProduct) {
        this.priceProduct = priceProduct;
    }

    public Long getQualityProduct() {
        return qualityProduct;
    }

    public void setQualityProduct(Long qualityProduct) {
        this.qualityProduct = qualityProduct;
    }

    public Double getBonusSale() {
        return bonusSale;
    }

    public void setBonusSale(Double bonusSale) {
        this.bonusSale = bonusSale;
    }

    public boolean isFlagProduct() {
        return flagProduct;
    }

    public void setFlagProduct(boolean flagProduct) {
        this.flagProduct = flagProduct;
    }

    public TypeProduct getTypeProduct() {
        return typeProduct;
    }

    public void setTypeProduct(TypeProduct typeProduct) {
        this.typeProduct = typeProduct;
    }
}
