package com.example.frosthavenapi;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

@SpringBootApplication
@EnableMongoRepositories
public class FrosthavenApiApplication {

	public static void main(String[] args) {
		SpringApplication.run(FrosthavenApiApplication.class, args);
	}
}
