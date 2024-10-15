package com.exercicio.cadastro_pessoas.repository;

import com.exercicio.cadastro_pessoas.app.PessoaJuridica;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PessoaJuridicaRepository extends JpaRepository<PessoaJuridica, String> {}
