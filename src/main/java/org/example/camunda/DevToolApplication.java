package org.example.camunda;

import io.camunda.zeebe.spring.client.EnableZeebeClient;
import io.swagger.v3.oas.models.OpenAPI;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import org.springframework.context.annotation.Bean;

@SpringBootApplication(exclude = {SecurityAutoConfiguration.class})
@EnableZeebeClient
public class DevToolApplication {

  public static void main(String[] args) {
    SpringApplication.run(DevToolApplication.class, args);
  }

  @Bean
  public OpenAPI swaggerOpenAPI() {
    return new OpenAPI();
  }
}
