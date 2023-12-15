import { ScenarioObject, User } from "../data/types";
import Scenario from "./Scenario";
import { Row, Col } from "react-bootstrap";
import { Dispatch, SetStateAction } from "react";
interface Props {
  scenarioObjects: Array<ScenarioObject | undefined>;
  showStartModal: () => void;
  user: User | undefined;
  setUser: Dispatch<SetStateAction<User | undefined>>;
}

const ScenarioGroup = ({
  scenarioObjects,
  showStartModal,
  user,
  setUser,
}: Props) => {
  let rows = [0];
  let cols = [0];

  scenarioObjects.forEach((obj) => {
    if (obj) {
      if (obj.xPos + 1 > cols.length) cols.push(cols.length);
      if (obj.yPos + 1 > rows.length) rows.push(rows.length);
    }
  });

  const findScenarioByPos = (x: number, y: number) => {
    const scenario = scenarioObjects.find((obj) => {
      if (obj) return obj.xPos == x && obj.yPos == y;
    });
    if (scenario) {
      return (
        <Scenario onClick={showStartModal} user={user} setUser={setUser}>
          {scenario}
        </Scenario>
      );
    }
  };

  return (
    <>
      {rows.map((y) => {
        return (
          <Row s="auto">
            {cols.map((x) => {
              return <Col>{findScenarioByPos(x, y)}</Col>;
            })}
          </Row>
        );
      })}
    </>
  );
};

export default ScenarioGroup;
