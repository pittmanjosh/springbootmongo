package com.example.MongoSpring;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


@RestController
@SpringBootApplication
public class MongoSpringApplication {

	public static void main(String[] args) {
		SpringApplication.run(MongoSpringApplication.class, args);
	}

	@GetMapping("/api/dadjokes")
	public String dadJokes() {
		return "Justice is a dish best served cold, if it were served warm it would be just water.";
	}

}
