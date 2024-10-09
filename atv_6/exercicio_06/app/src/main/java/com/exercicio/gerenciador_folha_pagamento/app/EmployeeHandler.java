package com.exercicio.gerenciador_folha_pagamento.app;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class EmployeeHandler 
{
    @GetMapping("/employees")
    public List<Employee> get_products_list()
    {
        List<Employee> employees = new ArrayList<>();

        Employee ana = new Employee(1, "Ana", 45.78);
        Employee bruna = new Employee(2, "Bruna", 60.00);
        Employee carlos = new Employee(3, "Carlos", 38.99);
        Employee diogo = new Employee(4, "Diogo", 45.78);
        Employee ester = new Employee(5, "Ester", 45.78);

        employees.add(ana);
        employees.add(bruna);
        employees.add(carlos);
        employees.add(diogo);
        employees.add(ester);

        return employees;
    }

}
