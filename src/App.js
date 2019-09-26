import React, { Component } from "react";
import "./App.css";
import RecipeContainer from "./components/RecipeContainer";
import NonResponsiveRecipeContainer from "./components/non-responsive/NonResponsiveRecipeContainer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route
              exact
              path="/"
              render={props => <RecipeContainer {...props} />}
            />
            <Route
              exact
              path="/nr"
              render={props => <NonResponsiveRecipeContainer {...props} />}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
