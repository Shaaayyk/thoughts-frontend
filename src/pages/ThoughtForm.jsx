import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Grid,
  Header,
  Segment,
  Form,
  Button,
} from "semantic-ui-react";

import ErrorMessage from "../components/ErrorMessage.jsx";
import thoughtsUtil from "../utils/thoughts.js";

export default function ThoughtForm({}) {
  const [form, setForm] = useState({
    title: "",
    content: "",
  });

  const [error, setError] = useState("");

  const navigate = useNavigate()

  function handleChange(event) {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await thoughtsUtil.addThought(form);
      navigate('/feed')
    } catch (error) {
      console.log(error);
      setError("Error!!");
    }
  }

  return (
    <>
      <Grid textAlign="center" verticalAlign="middle" style={{ height: '90vh'}}>
        <Grid.Column style={{ width: 450 }}>
          <Header>ThoughtForm</Header>
          <Form onSubmit={handleSubmit} autoComplete="off">
            <Segment>
              <Form.Input
                type="text"
                name="title"
                placeholder="Name your thought"
                onChange={handleChange}
                required
              />
              <Form.TextArea
                type="text"
                name="content"
                placeholder="Write it out..."
                onChange={handleChange}
                required
              />
              <Button type="submit">Save your thought</Button>
            </Segment>
            {error ? <ErrorMessage error={error} /> : null}
          </Form>
        </Grid.Column>
      </Grid>
    </>
  );
}
