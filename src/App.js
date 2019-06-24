import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Recipes from "./components/Recipes";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" render={props => <Recipes {...props} />} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
