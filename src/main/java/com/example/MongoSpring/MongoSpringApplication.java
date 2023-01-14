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

	@GetMapping("/api/person")
	public String getPersonName(@RequestParam(value = "name") String name) {
		System.out.println("Person request***");
		System.out.println("Creating Person>>>");
		System.out.println("");
		Person createdPerson = new Person(name);
		System.out.println("***Person Created");
		System.out.println("");

		return createdPerson.getName();
	}

}
