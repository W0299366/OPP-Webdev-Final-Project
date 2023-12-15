package com.example.frosthavenapi.model;

import com.mongodb.lang.Nullable;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import java.util.List;

@Document("Character_Classes")
public class CharacterClass {
    @Id
    private String id;
    private String name;
    private String characterClass;
    private String handSize;
    private List<String> traits;
    private String color;
    @Nullable
    private Boolean spoiler;
    private List<Object> stats;

    public CharacterClass(String id, String name, String characterClass, String handSize, List<String> traits, String color, @Nullable Boolean spoiler, List<Object> stats) {
        this.id = id;
        this.name = name;
        this.characterClass = characterClass;
        this.handSize = handSize;
        this.traits = traits;
        this.color = color;
        this.spoiler = spoiler;
        this.stats = stats;
    }

    public String getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getCharacterClass() {
        return characterClass;
    }

    public String getHandSize() {
        return handSize;
    }

    public List<String> getTraits() {
        return traits;
    }

    public String getColor() {
        return color;
    }

    public Boolean isSpoiler() {
        return spoiler;
    }

    public List<Object> getStats() {
        return stats;
    }
}
