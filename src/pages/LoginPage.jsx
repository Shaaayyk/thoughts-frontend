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

import ErrorMessage from "../components/ErrorMessage.jsx";
import usersUtil from "../utils/users.js";

export default function LoginPage({ setUser }) {
  const [form, setForm] = useState({
    email: "",
    password: "",
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
      await usersUtil.login(form);
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
          <Header>LoginPage</Header>
          <Form onSubmit={handleSubmit} autoComplete="off">
            <Segment>
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
              <Button type="submit">Signup</Button>
            </Segment>
            <Message>
              New to the site? <Link to="/signup">Sign up here</Link>
            </Message>
            {error ? <ErrorMessage error={error} /> : null}
          </Form>
        </Grid.Column>
      </Grid>
    </>
  );
}
