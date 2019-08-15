import React from "react";
import { Route, Switch } from "react-router-dom";

import RecipeIndex from "./recipes/index";
import RecipeShow from "./recipes/show";
import RecipeNew from "./recipes/new";
import RecipeEdit from "./recipes/edit";
import RecipeDestroy from "./recipes/destroy";

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={RecipeIndex} />
      <Route exact path="/new" component={RecipeNew} />
      <Route exact path="/:id" component={RecipeShow} />
      <Route exact path="/:id/edit" component={RecipeEdit} />
      <Route exact path="/:id/destroy" component={RecipeDestroy} />
    </Switch>
  );
}

export default Routes;