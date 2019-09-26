import React, { Component } from "react";
import RecipeCard from "../RecipeCard";
import vegetable from "../gallery/vegetable-kebab.jpg";
import grilledChicken from "../gallery/grilledChicken.jpg";
import hamburger from "../gallery/hamburger.jpg";
import pizza from "../gallery/pizza.jpg";
import potatoSoup from "../gallery/potatoSoup.jpg";
import prawns from "../gallery/prawns.jpg";
import spaghetti from "../gallery/spaghetti.jpg";
import sushi from "../gallery/sushi.jpg";
import toastOmelette from "../gallery/toastOmelette.jpg";

class NonResponsiveRecipes extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {};
  }

  render() {
    return (
      <div>
        <table>
          <tr>
            <td>
              <RecipeCard recipeName="Vegetable Kebab" image={vegetable} />
            </td>
            <td>
              <RecipeCard recipeName="Hamburger" image={hamburger} />
            </td>
            <td>
              <RecipeCard recipeName="Prawn" image={prawns} />
            </td>
          </tr>
          <tr>
            <td>
              <RecipeCard recipeName="Grilled Chicken" image={grilledChicken} />
            </td>
            <td>
              <RecipeCard recipeName="Pizza" image={pizza} />
            </td>
            <td>
              <RecipeCard recipeName="Potato Soup" image={potatoSoup} />
            </td>
          </tr>
          <tr>
            <td>
              <RecipeCard recipeName="Spaghetti" image={spaghetti} />
            </td>
            <td>
              <RecipeCard recipeName="Sushi" image={sushi} />
            </td>
            <td>
              <RecipeCard recipeName="Toast Omelette" image={toastOmelette} />
            </td>
          </tr>
        </table>
      </div>
    );
  }
}

export default NonResponsiveRecipes;
