import { useState } from "react";
import { useParams } from "react-router-dom";

import additionsUtil from "../utils/additions.js";

export default function AdditionForm({}) {
  const [form, setForm] = useState({
    content: "",
    completed: false,
  });

  const [error, setError] = useState("");

  const { id } = useParams();

  function handleChange(event) {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await additionsUtil.createAddition(id, form);
      // do something
    } catch (error) {
      console.log(error);
      setError("Error!!");
    }
  }

  return (
    <>
      <div>AdditionForm</div>
      <form onSubmit={handleSubmit} autoComplete="off">
        <input
          type="text"
          name="content"
          placeholder="Write it out..."
          onChange={handleChange}
          required
        />
        <button type="submit">Add</button>
        {error ? <ErrorMessage error={error} /> : null}
      </form>
    </>
  );
}
