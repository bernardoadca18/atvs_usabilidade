package com.exercicio.cadastro_pessoas.app;

import jakarta.persistence.MappedSuperclass;

@MappedSuperclass
public abstract class Pessoa 
{
    private String nome;

    // Construtor
    public Pessoa(String nome)
    {
        this.nome = nome;
    }

    // Getter
    public String getNome()
    {
        return this.nome;
    }

    // Setter
    public void setNome(String nome)
    {
        this.nome = nome;
    }
}
