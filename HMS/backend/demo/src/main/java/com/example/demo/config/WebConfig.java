package com.example.demo.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/api/**")  // Apply to all /api endpoints
                .allowedOrigins("http://localhost:3000", "http://localhost:3001")  // Allow both frontend URLs
                .allowedMethods("GET", "POST", "PUT", "DELETE", "PATCH")  // Allow these HTTP methods
                .allowCredentials(true)  // Allow credentials like cookies, authorization headers
                .allowedHeaders("*"); // Allow all headers
    }
}
