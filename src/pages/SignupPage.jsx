import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  Grid,
  Header,
  Segment,
  Form,
  Button,
  Message,
} from "semantic-ui-react";

import usersUtil from "../utils/users.js";
import ErrorMessage from "../components/ErrorMessage.jsx";

export default function SignupPage({ setUser }) {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const [error, setError] = useState("");

  const navigate = useNavigate();

  function handleChange(event) {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      await usersUtil.signup(form);
      setUser(usersUtil.getUser());
      navigate("/");
    } catch (error) {
      console.log(error);
      setError("Error!!");
    }
  }

  return (
    <>
      <Grid
        textAlign="center"
        verticalAlign="middle"
        style={{ height: "100vh" }}
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header>SignupPage</Header>
          <Form onSubmit={handleSubmit} autoComplete="off">
            <Segment>
              <Form.Input
                type="text"
                name="firstName"
                placeholder="First name"
                onChange={handleChange}
                required
              />
              <Form.Input
                type="text"
                name="lastName"
                placeholder="Last name"
                onChange={handleChange}
                required
              />
              <Form.Input
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleChange}
                required
              />
              <Form.Input
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleChange}
                required
              />
              <Form.Input
                type="password"
                name="passwordConfirm"
                placeholder="Confirm password"
                onChange={handleChange}
                required
              />
              <Button type="submit">Signup</Button>
            </Segment>
            <Message>
              Already have an account? <Link to="/login">Log in here</Link>
            </Message>
            {error ? <ErrorMessage error={error} /> : null}
          </Form>
        </Grid.Column>
      </Grid>
    </>
  );
}
