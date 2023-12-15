import { Stack } from "react-bootstrap";
import { ScenarioObject, User } from "../data/types";
import { useEffect, useState, Dispatch, SetStateAction } from "react";
interface Props {
  children: ScenarioObject;
  onClick: () => void;
  user: User | undefined;
  setUser: Dispatch<SetStateAction<User | undefined>>;
}

const Scenario = ({ children, onClick, user, setUser }: Props) => {
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    user &&
      user.revealedScenarios &&
      user.revealedScenarios.forEach((rIndex) => {
        if (rIndex == children?.index) {
          setRevealed(true);
        }
      });
    setRevealed(children?.revealed ? true : false);
  }, []);

  return (
    <Stack
      gap={1}
      id={children.index}
      className={
        "scenario position-relative border border-2 rounded-2 border-secondary-subtle p-1 m-2 z-1 " +
        (revealed ? "bg-light" : "bg-dark")
      }
      onClick={() => {
        if (!revealed) {
          setRevealed(true);
          let temp: User | undefined = user;
          temp &&
            temp.revealedScenarios &&
            temp.revealedScenarios.push(children.index);
          setUser(temp);
          if (
            children.index == "4" &&
            (!user?.killedIcefist || !user?.killedSnowdancer)
          ) {
            onClick();
            console.log("Scenario Call");
          }
        }
      }}
    >
      <div
        style={revealed ? { visibility: "visible" } : { visibility: "hidden" }}
        className="ms-1"
      >
        {children?.index}
      </div>
      <div
        style={
          revealed
            ? { color: "var(--bs-body-color)" }
            : { color: "var(--bs-body-bg)", fontSize: "30px" }
        }
        className="text-center"
      >
        {revealed ? children?.name : children.index}
      </div>
      <div
        style={revealed ? { visibility: "visible" } : { visibility: "hidden" }}
        className="text-end me-1"
      >
        {children?.requirements &&
          children?.requirements?.map((obj) => {
            return obj.buildings
              ? obj.buildings.toString()
              : obj.campaignSticker?.toString();
          })[0]}
      </div>
    </Stack>
  );
};

export default Scenario;
