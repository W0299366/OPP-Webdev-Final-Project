import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import { LoginRequest, User } from "../data/types";
import { Dispatch, SetStateAction } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  setUser: Dispatch<SetStateAction<User | undefined>>;
  user: User | undefined;
}

function NavbarWrapper({ setUser, user }: Props) {
  const [sumbitState, setSumbitState] = useState<number>(-1);
  const navigate = useNavigate();

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    if (user) {
      const logReq: User = {
        username: user.username,
        password: user.password,
        revealedScenarios: user.revealedScenarios,
        killedSnowdancer: user.killedSnowdancer,
        killedIcefist: user.killedIcefist,
      };
      axios
        .post<LoginRequest>(
          `http://localhost:8081/api/${sumbitState == 0 ? "delete" : "update"}`,
          logReq
        )
        .then(() => {
          if (sumbitState == 0) {
            setUser(undefined);
            navigate("/");
          } else {
            alert("Account Saved.");
          }
        });
    }
  };

  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary border-bottom border-3 border-dark-subtle"
    >
      <Container>
        <Navbar.Brand href="#home">FH Scenario Tracker</Navbar.Brand>
        {user && (
          <>
            <Navbar.Text> {`Logged in as: ${user.username}`} </Navbar.Text>
            <Form onSubmit={handleSubmit}>
              <Button type="submit" onClick={() => setSumbitState(0)}>
                Delete Account
              </Button>
              <Button type="submit" onClick={() => setSumbitState(1)}>
                Save Data
              </Button>
            </Form>
          </>
        )}
      </Container>
    </Navbar>
  );
}

export default NavbarWrapper;
