import React, { Component } from "react";

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
            <figure>
              <img alt="cereal" src={require("./gallery/cereal.jpg")} />
              <figcaption>Breakfast cereal</figcaption>
            </figure>
          </li>
          <li>
            <figure>
              <img
                src={require("./gallery/chocolateCake.jpg")}
                alt="Chocolate cake"
              />
              <figcaption>Chocolate Cake</figcaption>
            </figure>
          </li>
          <li>
            <figure>
              <img
                src={require("./gallery/grilledChicken.jpg")}
                alt="Grilled Chicken"
              />
              <figcaption>Grilled Chicken</figcaption>
            </figure>
          </li>
          <li>
            <figure>
              <img src={require("./gallery/hamburger.jpg")} alt="Hamburger" />
              <figcaption>Hamburger</figcaption>
            </figure>
          </li>
          <li>
            <figure>
              <img src={require("./gallery/macaroons.jpg")} alt="Macaroons" />
              <figcaption>Macaroons</figcaption>
            </figure>
          </li>
          <li>
            <figure>
              <img src={require("./gallery/muesli.jpg")} alt="Muesli" />
              <figcaption>Muesli</figcaption>
            </figure>
          </li>
          <li>
            <figure>
              <img
                src={require("./gallery/nougatMousse.jpg")}
                alt="Nougat Mousse"
              />
              <figcaption>Nougat Mousse</figcaption>
            </figure>
          </li>
          <li>
            <figure>
              <img src={require("./gallery/pancakes.jpg")} alt="Pancakes" />
              <figcaption>Pancakes</figcaption>
            </figure>
          </li>
          <li>
            <figure>
              <img src={require("./gallery/pizza.jpg")} alt="Pizza" />
              <figcaption>Pizza</figcaption>
            </figure>
          </li>
          <li>
            <figure>
              <img
                src={require("./gallery/potatoSoup.jpg")}
                alt="Potato Soup"
              />
              <figcaption>Potato Soup</figcaption>
            </figure>
          </li>
          <li>
            <figure>
              <img src={require("./gallery/prawns.jpg")} alt="Prawns" />
              <figcaption>Prawns</figcaption>
            </figure>
          </li>
          <li>
            <figure>
              <img
                src={require("./gallery/puffPastry.jpg")}
                alt="Puff Pastry"
              />
              <figcaption>Puff Pastry</figcaption>
            </figure>
          </li>
          <li>
            <figure>
              <img src={require("./gallery/spaghetti.jpg")} alt="Spaghetti" />
              <figcaption>Spaghetti</figcaption>
            </figure>
          </li>
          <li>
            <figure>
              <img
                src={require("./gallery/strawberryParfait.jpg")}
                alt="Strawberry Parfait"
              />
              <figcaption>Strawberry Parfait</figcaption>
            </figure>
          </li>
          <li>
            <figure>
              <img
                src={require("./gallery/strawberryTart.jpg")}
                alt="Strawberry Tart"
              />
              <figcaption>Strawberry Tart</figcaption>
            </figure>
          </li>
          <li>
            <figure>
              <img src={require("./gallery/sushi.jpg")} alt="sushi" />
              <figcaption>Sushi</figcaption>
            </figure>
          </li>
          <li>
            <figure>
              <img
                src={require("./gallery/toastOmelette.jpg")}
                alt="Toast Omelette"
              />
              <figcaption>Toast Omelette</figcaption>
            </figure>
          </li>
          <li>
            <figure>
              <img
                src={require("./gallery/tomatoSoup.jpg")}
                alt="Tomato Soup"
              />
              <figcaption>Tomato Soup</figcaption>
            </figure>
          </li>
          <li>
            <figure>
              <img
                src={require("./gallery/vegetableKebab.jpg")}
                alt="Vegetable Kebab"
              />
              <figcaption>Vegetable Kebab</figcaption>
            </figure>
          </li>
          <li>
            <figure>
              <img
                src={require("./gallery/yogurtPudding.jpg")}
                alt="Yogurt Pudding"
              />
              <figcaption>Yogurt Pudding</figcaption>
            </figure>
          </li>
        </ul>
      </div>
    );
  }
}

export default Recipes;
