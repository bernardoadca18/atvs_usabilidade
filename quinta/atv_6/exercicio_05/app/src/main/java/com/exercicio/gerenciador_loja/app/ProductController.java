package com.exercicio.gerenciador_loja.app;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ProductController 
{
    @GetMapping("/products")
    public List<Product> get_products_list()
    {
        List<Product> products = new ArrayList<>();

        Product shoe = new Product(1, "Sapato", 99.99);
        Product purse = new Product(2, "Bolsa", 103.89);
        Product shirt = new Product(3, "Camisa", 49.98);
        Product pants = new Product(4, "Calça", 89.72);
        Product blouse = new Product(5, "Blusa", 97.35);

        products.add(shoe);
        products.add(purse);
        products.add(shirt);
        products.add(pants);
        products.add(blouse);

        return products;
    }

}
