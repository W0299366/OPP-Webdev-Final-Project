package com.example.frosthavenapi.controllers;

import com.example.frosthavenapi.model.Scenario;
import com.example.frosthavenapi.repository.ScenarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/scenario")
public class ScenarioController {

    @Autowired
    ScenarioRepository scenarioRepository;

    @GetMapping
    public List<Scenario> getAllScenarios() {
        return scenarioRepository.findScenariosByIndexNotNullOrderById();
    }

    @GetMapping("/{index}")
    public Scenario findItemByNumber(@PathVariable("index") String index) {
        return scenarioRepository.findScenarioByIndex(index);
    }
}
