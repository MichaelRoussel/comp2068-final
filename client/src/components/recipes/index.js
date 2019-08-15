import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

function Index() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    Axios.get("/api/recipes")
      .then(result => setRecipes(result.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="container">
      <header>
        <h1>All Recipes</h1>
      </header>

      <div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Title</th>
              <th>Ingredients</th>
              <th>Difficulty</th>
              <th>Type</th>
            </tr>
          </thead>

          <tbody>
            {recipes.map(recipe => (
              <tr key={recipe._id}>
                <td>
                  <Link to={`/recipes/${recipe._id}`}>{recipe.title}</Link>
                </td>
                <td>{recipe.ingredients}</td>
                <td>{recipe.difficulty}</td>
                <td>{recipe.type}</td>
                <td>
                  <Link to={`/recipes/${recipe._id}/edit`}>edit </Link>|
                  <Link to={`/recipes/${recipe._id}/destroy`}> delete</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Index;
