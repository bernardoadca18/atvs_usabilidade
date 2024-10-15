package com.exercicio.cadastro_pessoas.repository;

import com.exercicio.cadastro_pessoas.app.PessoaFisica;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PessoaFisicaRepository extends JpaRepository<PessoaFisica, String> {}
