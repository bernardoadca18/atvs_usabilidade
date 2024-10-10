package com.exercicio.gerenciador_folha_pagamento.app;

public class Employee 
{
    private int id;
    private String name;
    private double hour_wage;

    public Employee(int id, String name, double hour_wage)
    {
        this.id = id;
        this.name = name;
        this.hour_wage = hour_wage;
    }

    // Getters
    public int get_id()
    {
        return this.id;
    }

    public String get_name()
    {
        return this.name;
    }

    public double get_hour_wage()
    {
        return this.hour_wage;
    }

    // Setters
    public void set_id(int id)
    {
        this.id = id;
    }

    public void set_name(String product_name)
    {
        this.name = product_name;
    }

    public void set_hour_wage(double hour_wage)
    {
        this.hour_wage = hour_wage;
    }
}
