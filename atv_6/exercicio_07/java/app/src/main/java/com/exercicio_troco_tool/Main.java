package com.exercicio_troco_tool;

import java.util.Scanner;

public class Main 
{
    public static void main(String[] args) 
    {
        Scanner sc = new Scanner(System.in);
        boolean quit = false;

        while (!quit)
        {
            double paid_value;
            double total_price;
            double change;
            double[] bill_values = {50.0, 20.0, 10.0, 5.0, 2.0, 1.0};
            int[] bill_amount = {0, 0, 0, 0, 0, 0};

            System.out.print("Insira o valor a ser pago: ");

            while (!sc.hasNextDouble()) 
            {
                System.out.println("Entrada inválida. Por favor, digite um número válido.");
                sc.next();
            }

            total_price = sc.nextDouble();

            System.out.print("Insira o valor pago: ");

            while (!sc.hasNextDouble()) 
            {
                System.out.println("Entrada inválida. Por favor, digite um número válido.");
                sc.next();
            }

            paid_value = sc.nextDouble();

            if (total_price > paid_value)
            {
                System.out.println("A quantia paga é insuficiente para realizar a compra!");
                continue;
            }

            change = paid_value - total_price;


            System.out.printf("\nO preço total é de R$ %.2f%n", total_price);
            System.out.printf("O valor pago é de R$ %.2f%n", paid_value);
            System.out.printf("O troco total é de R$ %.2f%n\n", change);

            for (int i = 0; i < bill_values.length; i++)
            {
                while (change >= bill_values[i])
                {
                    change -= bill_values[i];
                    bill_amount[i] += 1;
                }
            }

            for (int i = 0; i < bill_amount.length; i++)
            {
                System.out.printf("Notas de R$ %.2f : %d\n", bill_values[i], bill_amount[i]);
            }

            System.out.print("\nDigite 1 para continuar, ou 0 para sair: ");
            
            if (sc.nextInt() == 0)
            {
                quit = true;
            }
        }

        sc.close();

    }
}