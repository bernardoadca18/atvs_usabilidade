package com.exercicio.cadastro_pessoas.app;


import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class PessoaFisica extends Pessoa
{
    @Id
    private String cpf;

    public PessoaFisica(String nome, String cpf) 
    {
        super(nome);

        this.cpf = cpf;
    }

    // Getter
    public String getCpf()
    {
        return this.cpf;
    }

    // Setter
    public void setCpf(String cpf)
    {
        this.cpf = cpf;
    }

}
