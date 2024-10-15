package com.exercicio.cadastro_pessoas.app;


import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class PessoaJuridica extends Pessoa
{
    @Id
    private String cnpj;

    // Construtor
    public PessoaJuridica(String nome, String cnpj)
    {
        super(nome);
        this.cnpj = cnpj;
    }

    // Getter

    public String getCnpj()
    {
        return this.cnpj;
    }

    // Setter
    public void setCnpj(String cnpj)
    {
        this.cnpj = cnpj;
    }
}
