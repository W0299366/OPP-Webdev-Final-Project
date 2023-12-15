package com.example.frosthavenapi.repository;

import com.example.frosthavenapi.model.CharacterClass;
import org.springframework.data.mongodb.repository.MongoRepository;
import java.util.List;

public interface CharacterClassRepository extends MongoRepository<CharacterClass, String> {
    CharacterClass findCharacterClassByName(String name);
    List<CharacterClass> findCharacterClassBySpoilerIsNull();
    List<CharacterClass> findCharacterClassesByNameNotNull();

    public long count();
}
