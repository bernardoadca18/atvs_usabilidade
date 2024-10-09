package com.exercicio.gerenciador_loja.app;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        // Aqui você pode personalizar os endpoints que permitem CORS
        registry.addMapping("/**") // Aplica a todos os endpoints
                .allowedOrigins("http://localhost:3000", "http://127.0.0.1:8080") // Substitua pelo endereço do seu frontend
                .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")
                .allowedHeaders("*")
                .allowCredentials(true); // Caso precise de cookies ou autenticação
    }
}
