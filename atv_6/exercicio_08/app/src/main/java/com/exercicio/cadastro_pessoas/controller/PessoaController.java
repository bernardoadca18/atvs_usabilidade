package com.exercicio.cadastro_pessoas.controller;

import com.exercicio.cadastro_pessoas.app.PessoaFisica;
import com.exercicio.cadastro_pessoas.app.PessoaJuridica;
import com.exercicio.cadastro_pessoas.repository.PessoaFisicaRepository;
import com.exercicio.cadastro_pessoas.repository.PessoaJuridicaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/pessoas")
public class PessoaController 
{
    @Autowired
    private PessoaFisicaRepository pessoaFisicaRepository;
    
    @Autowired
    private PessoaJuridicaRepository pessoaJuridicaRepository;

    @PostMapping("/fisica/cadastro/")
    public ResponseEntity<PessoaFisica> cadastrarPessoaFisica(@RequestBody PessoaFisica pessoaFisica)
    {
        PessoaFisica novaPessoaFisica = pessoaFisicaRepository.save(pessoaFisica);
        return new ResponseEntity<>(novaPessoaFisica, HttpStatus.CREATED);
    }

    @PostMapping("/juridica/cadastro/")
    public ResponseEntity<PessoaJuridica> cadastrarPessoaJuridica(@RequestBody PessoaJuridica pessoaJuridica)
    {
        PessoaJuridica novaPessoaJuridica = pessoaJuridicaRepository.save(pessoaJuridica);
        return new ResponseEntity<>(novaPessoaJuridica, HttpStatus.CREATED);
    }

    @GetMapping("/fisica/listar")
    public ResponseEntity<?> listarPessoasFisicas()
    {
        return new ResponseEntity<>(pessoaFisicaRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping("/juridica/listar")
    public ResponseEntity<?> listarPessoasJuridicas()
    {
        return new ResponseEntity<>(pessoaJuridicaRepository.findAll(), HttpStatus.OK);
    }

}
