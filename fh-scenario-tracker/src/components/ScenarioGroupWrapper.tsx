import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { ScenarioObject, IndexPath, User } from "../data/types";
import Accordion from "react-bootstrap/Accordion";
import Xarrow from "react-xarrows";
import ScenarioGroup from "./ScenarioGroup";
import { Dispatch, SetStateAction } from "react";
interface Props {
  groupIndex: number;
  indexPath: Array<IndexPath>;
  scenarios: Array<ScenarioObject>;
  showStartModal: () => void;
  title: string;
  user: User | undefined;
  setUser: Dispatch<SetStateAction<User | undefined>>;
}

function ScenarioGroupWrapper({
  groupIndex,
  indexPath,
  scenarios,
  showStartModal,
  title,
  user,
  setUser,
}: Props) {
  let scenarioGroup: Array<ScenarioObject | undefined> = indexPath.map(
    (groupIndexPath) => {
      return scenarios.find((scenario) => {
        scenario.index = scenario.index.replace(/\D/g, "");
        let flag = Number(scenario.index) == groupIndexPath.index;
        if (flag) {
          scenario.xPos = groupIndexPath.xPos;
          scenario.yPos = groupIndexPath.yPos;
          return flag;
        }
      });
    }
  );

  return (
    <Row className="m-3">
      <Col>
        <Accordion.Item
          eventKey={groupIndex.toString()}
          className="bg-body-secondary border border-3 rounded-3 border-dark-subtle pb-3"
        >
          <Accordion.Header className="text-center">{title}</Accordion.Header>
          <Accordion.Body>
            <ScenarioGroup
              showStartModal={showStartModal}
              scenarioObjects={scenarioGroup}
              user={user}
              setUser={setUser}
            />
            {scenarioGroup.map((scenario) => {
              return (
                <>
                  {scenario?.unlocks?.map((unlock) => {
                    return (
                      <Xarrow
                        showHead={false}
                        path={"straight"}
                        startAnchor={"middle"}
                        endAnchor={"middle"}
                        start={scenario.index}
                        end={unlock.replace(/\D/g, "")}
                      />
                    );
                  })}
                  {scenario?.links?.map((link) => {
                    return (
                      <Xarrow
                        showHead={false}
                        path={"straight"}
                        startAnchor={"middle"}
                        endAnchor={"middle"}
                        color="orange"
                        start={scenario.index}
                        end={link.replace(/\D/g, "")}
                      />
                    );
                  })}
                  {scenario?.forcedLinks?.map((forcedLink) => {
                    return (
                      <Xarrow
                        showHead={false}
                        path={"straight"}
                        startAnchor={"middle"}
                        endAnchor={"middle"}
                        color="red"
                        start={scenario.index}
                        end={forcedLink.replace(/\D/g, "")}
                      />
                    );
                  })}
                </>
              );
            })}
          </Accordion.Body>
        </Accordion.Item>
      </Col>
    </Row>
  );
}

export default ScenarioGroupWrapper;
