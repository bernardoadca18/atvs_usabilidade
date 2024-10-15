package com.exercicio.cadastro_pessoas.app;

import java.util.ArrayList;
import java.util.List;



public class Cadastro 
{
    private final List<Pessoa> lista_pessoas = new ArrayList<>();

    public void add_pessoa(Pessoa pessoa)
    {
        lista_pessoas.add(pessoa);
    }

    public List<Pessoa> get_pessoas()
    {
        return this.lista_pessoas;
    }
}
