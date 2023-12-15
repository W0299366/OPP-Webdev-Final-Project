import axios from "axios";
import { Dispatch, SetStateAction, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { LoginRequest, User } from "../data/types";
import { Container } from "react-bootstrap";

interface Props {
  setUser: Dispatch<SetStateAction<User | undefined>>;
}

const Login = ({ setUser }: Props) => {
  const [usernameLogin, setUserNameLogin] = useState("");
  const [passwordLogin, setPasswordLogin] = useState("");

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    const logReq: LoginRequest = {
      username: usernameLogin,
      password: passwordLogin,
    };
    axios
      .post<LoginRequest>("http://localhost:8081/api/login", logReq)
      .then((response) => {
        setUser(response.data as User);
      });
  };

  return (
    <Container className="w-25 p-5 mt-5">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="loginUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Username"
            onChange={(e) => setUserNameLogin(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="loginPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => setPasswordLogin(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
        <Form.Text className="ms-3">
          <a href="/signup">New user? Sign up!</a>
        </Form.Text>
      </Form>
    </Container>
  );
};
export default Login;
