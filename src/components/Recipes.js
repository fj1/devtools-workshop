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
            <RecipeCard
              title="Vegetable Kebab"
              image={vegetable}
              calories="200"
            />
          </li>
          <li>
            <RecipeCard title="Hamburger" image={hamburger} calories="200" />
          </li>
          <li>
            <RecipeCard
              title="Grilled Chicken"
              image={grilledChicken}
              calories="200"
            />
          </li>
          <li>
            <RecipeCard title="Pizza" image={pizza} calories="200" />
          </li>
          <li>
            <RecipeCard title="Potato Soup" image={potatoSoup} calories="200" />
          </li>
          <li>
            <RecipeCard title="Prawns" image={prawns} calories="200" />
          </li>
          <li>
            <RecipeCard title="Spaghetti" image={spaghetti} calories="200" />
          </li>
          <li>
            <RecipeCard title="Sushi" image={sushi} calories="200" />
          </li>
          <li>
            <RecipeCard
              title="Toast Omelette"
              image={toastOmelette}
              calories="200"
            />
          </li>
        </ul>
      </div>
    );
  }
}

export default Recipes;
