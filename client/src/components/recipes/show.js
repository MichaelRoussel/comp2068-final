import React, { useState, useEffect } from "react";
import Axios from "axios";

function Show(props) {
  console.log("inside show");
  const [recipe, setRecipe] = useState([]);

  useEffect(() => {
    Axios.get(`/api/recipes/${props.match.params.id}`)
      .then(result => setRecipe(result.data))
      .catch(err => console.error(err));
  }, [props]);

  return (
    <div className="container">
      <header>
        <h1>{recipe.title}</h1>
      </header>

      <h4>Ingredients: {recipe.ingredients}</h4>
      <h4>Difficulty: {recipe.difficulty}</h4>
      <h4>Type: {recipe.type}</h4>
    </div>
  );
}

export default Show;
