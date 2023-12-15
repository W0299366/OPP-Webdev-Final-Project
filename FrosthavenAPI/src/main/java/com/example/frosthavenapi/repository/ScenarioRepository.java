package com.example.frosthavenapi.repository;

import com.example.frosthavenapi.model.Scenario;
import org.springframework.data.mongodb.repository.MongoRepository;
import java.util.List;

public interface ScenarioRepository extends MongoRepository<Scenario, String> {
    Scenario findScenarioByIndex(String index);
    List<Scenario> findScenariosByIndexNotNullOrderById();

    public long count();
}
