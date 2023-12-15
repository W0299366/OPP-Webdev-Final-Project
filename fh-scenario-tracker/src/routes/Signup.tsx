import axios from "axios";
import { Dispatch, SetStateAction, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { LoginRequest, User } from "../data/types";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [usernameSignup, setUserNameSignup] = useState("");
  const [passwordSignup, setPasswordSignup] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    const logReq: LoginRequest = {
      username: usernameSignup,
      password: passwordSignup,
    };
    axios
      .post<LoginRequest>("http://localhost:8081/api/signup", logReq)
      .then((response) => {
        navigate("/");
      });
  };

  return (
    <Container className="w-25 p-5 mt-5">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="SignupUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Username"
            onChange={(e) => setUserNameSignup(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="SignupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => setPasswordSignup(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Signup
        </Button>
      </Form>
    </Container>
  );
};

export default Signup;
