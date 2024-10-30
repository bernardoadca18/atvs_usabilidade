package com.exercicio.gerenciador_loja.app;

public class Product 
{
    private int id;
    private String product_name;
    private double price;

    public Product(int id, String product_name, double price)
    {
        this.id = id;
        this.product_name = product_name;
        this.price = price;
    }

    // Getters
    public int get_id()
    {
        return this.id;
    }

    public String get_product_name()
    {
        return this.product_name;
    }

    public double get_price()
    {
        return this.price;
    }

    // Setters
    public void set_id(int id)
    {
        this.id = id;
    }

    public void set_product_name(String product_name)
    {
        this.product_name = product_name;
    }

    public void set_price(double price)
    {
        this.price = price;
    }
}
