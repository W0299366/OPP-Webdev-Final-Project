package com.example.frosthavenapi.repository;

import com.example.frosthavenapi.model.LoginRequest;
import com.example.frosthavenapi.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface LoginRepository extends MongoRepository<User, String> {

    User findUserByUsernameAndPassword(String username, String password);
    User findUserByUsername(String username);
}
