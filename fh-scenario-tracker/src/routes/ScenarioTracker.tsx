import axios from "axios";
import Accordion from "react-bootstrap/Accordion";
import ScenarioGroupWrapper from "../components/ScenarioGroupWrapper";
import ScenarioGroups from "../data/ScenarioGroups.json";
import React, { useState, useEffect, Dispatch, SetStateAction } from "react";
import { ScenarioObject, IndexPath, User } from "../data/types";
import ChoiceModal from "../components/ChoiceModal";
interface Props {
  user: User | undefined;
  setUser: Dispatch<SetStateAction<User | undefined>>;
}

function ScenarioTracker({ user, setUser }: Props) {
  const [scenarios, setScenarios] = useState<ScenarioObject[]>([]);
  const [startingChoice, setStartingChoice] = useState<string | undefined>();
  const [showStartModal, setShowStartModal] = useState<boolean>(false);

  const startState = (e: React.MouseEvent, choice: string) => {
    setShowStartModal(false);
    setStartingChoice(choice);
  };

  useEffect(() => {
    axios
      .get<ScenarioObject[]>("http://localhost:8081/scenario")
      .then((response) => {
        setScenarios(response.data);
        console.log(
          `API: ${
            scenarios ? "Scenario fetch successful!" : "Scenario fetch failed."
          }`
        );
      });
  }, []);

  const showCampign = () => {
    if (user?.killedSnowdancer) {
      setStartingChoice("Snowdancer");
    } else if (user?.killedIcefist) {
      setStartingChoice("Icefist");
    }

    if (startingChoice) {
      if (user) {
        let temp: User | undefined = user;
        if (startingChoice == "Snowdancer") temp.killedSnowdancer = true;
        else temp.killedIcefist = true;
        setUser(temp);
      }
      if (ScenarioGroups.length == 10)
        ScenarioGroups.splice(startingChoice == "Snowdancer" ? 1 : 2, 1);
      return ScenarioGroups.map((obj, index) => {
        if (index != 0)
          return (
            <ScenarioGroupWrapper
              groupIndex={index}
              showStartModal={() => {}}
              indexPath={obj.indexPath.map((ipJSON) => {
                return ipJSON as IndexPath;
              })}
              scenarios={scenarios}
              title={obj.title}
              user={user}
              setUser={setUser}
            />
          );
      });
    }
  };

  return (
    <div>
      <ChoiceModal
        show={showStartModal}
        startState={(e, choice) => startState(e, choice)}
      />
      <Accordion
        defaultActiveKey={["0", "1", "2", "3", "4", "5", "6", "7"]}
        alwaysOpen
      >
        <ScenarioGroupWrapper
          groupIndex={0}
          showStartModal={() => setShowStartModal(true)}
          indexPath={ScenarioGroups[0].indexPath.map((ipJSON) => {
            return ipJSON as IndexPath;
          })}
          scenarios={scenarios}
          title={ScenarioGroups[0].title}
          user={user}
          setUser={setUser}
        />
        {showCampign()}
      </Accordion>
    </div>
  );
}

export default ScenarioTracker;
