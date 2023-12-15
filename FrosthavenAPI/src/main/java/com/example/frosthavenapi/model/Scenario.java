package com.example.frosthavenapi.model;

import com.mongodb.lang.Nullable;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import java.util.List;

@Document("Scenarios")
public class Scenario {
    @Id
    private String id;
    private String index;
    private String name;
    private int complexity;
    @Nullable
    private List<String> unlocks;
    @Nullable
    private List<Object> requirements;
    @Nullable
    private List<String> blocks;
    @Nullable
    private List<String> links;
    @Nullable
    private List<String> forcedLinks;
    @Nullable
    private Boolean revealed;

    public Scenario(String id, String index, String name, int complexity, @Nullable List<String> unlocks, @Nullable List<Object> requirements, @Nullable List<String> blocks, @Nullable List<String> links, @Nullable List<String> forcedLinks, @Nullable Boolean revealed) {
        this.id = id;
        this.index = index;
        this.name = name;
        this.complexity = complexity;
        this.unlocks = unlocks;
        this.requirements = requirements;
        this.blocks = blocks;
        this.links = links;
        this.forcedLinks = forcedLinks;
        this.revealed = revealed;
    }

    public String getId() {
        return id;
    }

    public String getIndex() {
        return index;
    }

    public String getName() {
        return name;
    }

    public int getComplexity() {
        return complexity;
    }

    @Nullable
    public List<String> getUnlocks() {
        return unlocks;
    }

    @Nullable
    public List<Object> getRequirements() {
        return requirements;
    }

    @Nullable
    public List<String> getBlocks() {
        return blocks;
    }

    @Nullable
    public List<String> getLinks() {
        return links;
    }

    @Nullable
    public List<String> getForcedLinks() {
        return forcedLinks;
    }

    @Nullable
    public Boolean getRevealed() {
        return revealed;
    }
}
