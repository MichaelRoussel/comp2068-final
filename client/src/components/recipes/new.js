import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import Axios from "axios";

function New() {
  const [inputs, setInputs] = useState({});
  const [redirect, setRedirect] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    Axios.post("/api/recipes/", inputs)
      .then(resp => setRedirect(true))
      .catch(err => console.error(err));
  }

  function handleInputChange(event) {
    event.persist();
    // const name = event.target.name;
    // const value = event.target.value;
    const { name, value } = event.target;

    setInputs(inputs => {
      inputs[name] = value;
      return inputs;
    });
  }

  if (redirect) return <Redirect to="/" />;

  return (
    <div className="container">
      <header>
        <h1>New Recipe Post</h1>
      </header>

      <div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Title</label>
            <input
              className="form-control"
              name="title"
              required="required"
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label>Ingredients</label>
            <input
              className="form-control"
              name="ingredients"
              required="required"
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label>Difficulty</label>
            <input
              className="form-control"
              name="difficulty"
              required="required"
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label>Type of Recipe</label>
            <select
              className="form-control"
              name="type"
              required="required"
              onChange={handleInputChange}
            >
              <option value="PASTA">Pasta</option>
              <option value="MEAT">Meat</option>
              <option value="CASSEROLE">Casserole</option>
              <option value="BAKING">Baking</option>
            </select>
          </div>

          <div className="form-group">
            <button className="btn btn-dark" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default New;
