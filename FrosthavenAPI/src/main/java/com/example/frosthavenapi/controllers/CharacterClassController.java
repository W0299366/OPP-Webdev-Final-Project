package com.example.frosthavenapi.controllers;

import com.example.frosthavenapi.model.CharacterClass;
import com.example.frosthavenapi.repository.CharacterClassRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/class")
public class CharacterClassController {

    @Autowired
    CharacterClassRepository characterClassRepository;

    @GetMapping("/{name}")
    public CharacterClass getClassByName(@PathVariable("name") String name) {
        return characterClassRepository.findCharacterClassByName(name);
    }

    @GetMapping("/nospoiler")
    public List<CharacterClass> getAllNonSpoilerClasses() {
        return characterClassRepository.findCharacterClassBySpoilerIsNull();
    }

    @GetMapping
    public List<CharacterClass> getAllClasses() {
        return characterClassRepository.findCharacterClassesByNameNotNull();
    }
}
