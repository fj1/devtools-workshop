import React, { Component } from "react";
import RecipeCard from "./RecipeCard";
import vegetable from "./gallery/vegetable-kebab.jpg";
import grilledChicken from "./gallery/grilledChicken.jpg";
import hamburger from "./gallery/hamburger.jpg";
import pizza from "./gallery/pizza.jpg";
import potatoSoup from "./gallery/potatoSoup.jpg";
import prawns from "./gallery/prawns.jpg";
import spaghetti from "./gallery/spaghetti.jpg";
import sushi from "./gallery/sushi.jpg";
import toastOmelette from "./gallery/toastOmelette.jpg";

class Recipes extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {};
  }

  render() {
    return (
      <div>
        <ul>
          <li>
            <RecipeCard recipeName="Vegetable Kebab" image={vegetable} />
          </li>
          <li>
            <RecipeCard recipeName="Hamburger" image={hamburger} />
          </li>
          <li>
            <RecipeCard recipeName="Prawn" image={prawns} />
          </li>
          <li>
            <RecipeCard recipeName="Grilled Chicken" image={grilledChicken} />
          </li>
          <li>
            <RecipeCard recipeName="Pizza" image={pizza} />
          </li>
          <li>
            <RecipeCard recipeName="Potato Soup" image={potatoSoup} />
          </li>
          <li>
            <RecipeCard recipeName="Spaghetti" image={spaghetti} />
          </li>
          <li>
            <RecipeCard recipeName="Sushi" image={sushi} />
          </li>
          <li>
            <RecipeCard recipeName="Toast Omelette" image={toastOmelette} />
          </li>
        </ul>
      </div>
    );
  }
}

export default Recipes;
