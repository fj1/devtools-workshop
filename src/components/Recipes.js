import React, { Component } from "react";
import RecipeCard from "./RecipeCard";

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
              imagePath="./gallery/vegetable-kebab.jpg"
              calories="200"
            />
          </li>
          <li>
            <RecipeCard
              title="Grilled Chicken"
              imagePath="/static/media/grilledChicken.bbd896f4.jpg"
              calories="200"
            />
          </li>
          <li>
            <RecipeCard
              title="Hamburger"
              imagePath="/static/media/hamburger.19bdf920.jpg"
              calories="200"
            />
          </li>
          <li>
            <RecipeCard
              title="Pizza"
              imagePath="/static/media/pizza.b93afe61.jpg"
              calories="200"
            />
          </li>
          <li>
            <RecipeCard
              title="Potato Soup"
              imagePath="/static/media/potatoSoup.69f6fa42.jpg"
              calories="200"
            />
          </li>
          <li>
            <RecipeCard
              title="Prawns"
              imagePath="/static/media/prawns.72f72806.jpg"
              calories="200"
            />
          </li>
          <li>
            <RecipeCard
              title="Spaghetti"
              imagePath="/static/media/spaghetti.c4c1498c.jpg"
              calories="200"
            />
          </li>
          <li>
            <RecipeCard
              title="Sushi"
              imagePath="/static/media/sushi.9625979d.jpg"
              calories="200"
            />
          </li>
          <li>
            <RecipeCard
              title="Toast Omelette"
              imagePath="/static/media/toastOmelette.a946a56c.jpg"
              calories="200"
            />
          </li>
        </ul>
      </div>
    );
  }
}

export default Recipes;
