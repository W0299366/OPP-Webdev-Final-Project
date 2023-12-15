package com.example.frosthavenapi.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import java.util.List;

@Document("User")
public class User {
    @Id
    private String id;
    private String username;
    private String password;
    private List<String> revealedScenarios;
    private Boolean killedSnowdancer;
    private Boolean killedIcefist;

    public User(String username, String password, List<String> revealedScenarios, Boolean killedSnowdancer, Boolean killedIcefist) {
        this.username = username;
        this.password = password;
        this.revealedScenarios = revealedScenarios;
        this.killedSnowdancer = killedSnowdancer;
        this.killedIcefist = killedIcefist;
    }

    public String getId() {
        return id;
    }

    public String getUsername() {
        return username;
    }

    public String getPassword() {
        return password;
    }

    public List<String> getRevealedScenarios() {
        return revealedScenarios;
    }

    public void setRevealedScenarios(List<String> revealedScenarios) {
        this.revealedScenarios = revealedScenarios;
    }

    public Boolean getKilledSnowdancer() {
        return killedSnowdancer;
    }

    public void setKilledSnowdancer(Boolean killedSnowdancer) {
        this.killedSnowdancer = killedSnowdancer;
    }

    public Boolean getKilledIcefist() {
        return killedIcefist;
    }

    public void setKilledIcefist(Boolean killedIcefist) {
        this.killedIcefist = killedIcefist;
    }
}
