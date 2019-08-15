import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import Axios from "axios";

function Edit(props) {
  const [inputs, setInputs] = useState({});
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    Axios.get(`/api/recipes/${props.match.params.id}`)
      .then(result => setInputs(result.data))
      .catch(err => console.error(err));
  }, [props]);

  function handleSubmit(event) {
    event.preventDefault();

    Axios.post("/api/recipes/update", {
      id: props.match.params.id,
      ...inputs
    })
      .then(resp => setRedirect(true))
      .catch(err => console.error(err));
  }

  function handleInputChange(event) {
    event.persist();

    const { name, value } = event.target;

    setInputs(inputs => {
      return {
        ...inputs,
        [name]: value
      };
    });
  }

  if (redirect) return <Redirect to="/" />;

  return (
    <div className="container">
      <header>
        <h1>Edit Recipe Post</h1>
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
              value={inputs.title}
            />
          </div>

          <div className="form-group">
            <label>Ingredients</label>
            <input
              className="form-control"
              name="ingredients"
              required="required"
              onChange={handleInputChange}
              value={inputs.ingredients}
            />
          </div>

          <div className="form-group">
            <label>Difficulty</label>
            <input
              className="form-control"
              name="difficulty"
              required="required"
              onChange={handleInputChange}
              value={inputs.difficulty}
            />
          </div>

          <div className="form-group">
            <label>Type of Recipe</label>
            <select
              className="form-control"
              name="type"
              required="required"
              onChange={handleInputChange}
              value={inputs.type}
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

export default Edit;
