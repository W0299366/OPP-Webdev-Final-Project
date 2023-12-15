package com.example.frosthavenapi.controllers;

import com.example.frosthavenapi.model.LoginRequest;
import com.example.frosthavenapi.model.User;
import com.example.frosthavenapi.repository.LoginRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.List;


@CrossOrigin
@RestController
@RequestMapping("/api")
public class LoginController {

    @Autowired
    LoginRepository loginRepository;

    @PostMapping("/signup")
    public ResponseEntity newUser(@RequestBody LoginRequest loginRequest ) {
        List<String> tempList = Arrays.asList("0", "1");
        loginRepository.save(new User(loginRequest.username, loginRequest.password, tempList, false, false));
        return ResponseEntity.ok().body(loginRepository.findUserByUsernameAndPassword(loginRequest.username, loginRequest.password));
    }

    @PostMapping("/login")
    public ResponseEntity loginUser(@RequestBody LoginRequest loginRequest ) {
        return ResponseEntity.ok().body(loginRepository.findUserByUsernameAndPassword(loginRequest.username, loginRequest.password));
    }

    @PostMapping("/update")
    public ResponseEntity updateUser(@RequestBody User user) {
        User temp = loginRepository.findUserByUsernameAndPassword(user.getUsername(), user.getPassword());
        temp.setKilledIcefist(user.getKilledIcefist());
        temp.setKilledSnowdancer(user.getKilledSnowdancer());
        temp.setRevealedScenarios(user.getRevealedScenarios());
        loginRepository.save(temp);
        return ResponseEntity.ok(HttpStatus.OK);
    }

    @PostMapping("/delete")
    public ResponseEntity deleteUser(@RequestBody User user) {
        User temp = loginRepository.findUserByUsernameAndPassword(user.getUsername(), user.getPassword());
        loginRepository.deleteById(temp.getId());
        return ResponseEntity.ok(HttpStatus.OK);
    }
}
