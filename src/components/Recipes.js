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
              <img alt="Apple pie." src={require("./gallery/apple-pie.jpg")} />
              <figcaption>
                Apple pie, featuring apples from the latest harvest.
              </figcaption>
            </figure>
          </li>
          <li>
            <figure>
              <img
                src={require("./gallery/boston-creme.jpg")}
                alt="Boston cream pie."
              />
              <figcaption>Boston cream pie is the best!</figcaption>
            </figure>
          </li>
          <li>
            <figure>
              <img
                src={require("./gallery/cherry-alamode.jpg")}
                alt="Cherry pie with ice cream."
              />
              <figcaption>
                Mmm... cherry pie and ice cream hits the spot!
              </figcaption>
            </figure>
          </li>
          <li>
            <figure>
              <img
                src={require("./gallery/cherry-pie.jpg")}
                alt="Cherry pie."
              />
              <figcaption>
                Cherry pie is available for a short season!
              </figcaption>
            </figure>
          </li>
          <li>
            <figure>
              <img
                src={require("./gallery/coconut-creme.jpg")}
                alt="Coconut creme pie."
              />
              <figcaption>
                Coconut cream pie will transport you to the islands.
              </figcaption>
            </figure>
          </li>
          <li>
            <figure>
              <img
                src={require("./gallery/gone-pie.jpg")}
                alt="Pie is all gone."
              />
              <figcaption>Hurry before the pie is all gone!</figcaption>
            </figure>
          </li>
          <li>
            <figure>
              <img
                src={require("./gallery/keylime-pie.jpg")}
                alt="Key lime pie."
              />
              <figcaption>
                Key lime pie, featuring the smaller, sweeter limes of the
                Florida Keys.
              </figcaption>
            </figure>
          </li>
          <li>
            <figure>
              <img
                src={require("./gallery/lemon-meringue.jpg")}
                alt="Lemon meringue pie."
              />
              <figcaption>
                Lemon meringue pie, best consumed the day it's made.
              </figcaption>
            </figure>
          </li>
          <li>
            <figure>
              <img
                src={require("./gallery/mincemeat.jpg")}
                alt="Mincemeat pie."
              />
              <figcaption>
                Mincemeat pie for your traditional Thanksgiving table.
              </figcaption>
            </figure>
          </li>
          <li>
            <figure>
              <img src={require("./gallery/mini-pies.jpg")} alt="Mini pies." />
              <figcaption>Mini-pies... you can eat more than one!</figcaption>
            </figure>
          </li>
          <li>
            <figure>
              <img src={require("./gallery/mom-pie.jpg")} alt="Mom pie." />
              <figcaption>We make the best pies for Mother's Day!</figcaption>
            </figure>
          </li>
          <li>
            <figure>
              <img
                src={require("./gallery/peace-pie.jpg")}
                alt="Peace pie, made of blueberries and raspberries."
              />
              <figcaption>
                Our Peace Pie is made of summer's best blueberries and
                raspberries.
              </figcaption>
            </figure>
          </li>
          <li>
            <figure>
              <img src={require("./gallery/peach-pie.jpg")} alt="Peach pie." />
              <figcaption>Peach pie, a piece of Southern heaven.</figcaption>
            </figure>
          </li>
          <li>
            <figure>
              <img
                src={require("./gallery/pie-coffee.jpg")}
                alt="Pie and coffee."
              />
              <figcaption>
                What could be better than Merilee's pie and a hot cup of coffee?
              </figcaption>
            </figure>
          </li>
          <li>
            <figure>
              <img
                src={require("./gallery/pie-slice-buffet.jpg")}
                alt="Buffet of pie slices."
              />
              <figcaption>Heaven includes a buffet of pie options!</figcaption>
            </figure>
          </li>
          <li>
            <figure>
              <img
                src={require("./gallery/pumpkin-pie.jpg")}
                alt="Pumpkin pie."
              />
              <figcaption>
                Pumpkin pie, a best-seller for Thanksgiving!
              </figcaption>
            </figure>
          </li>
          <li>
            <figure>
              <img
                src={require("./gallery/whole-pie-buffet.jpg")}
                alt="Whole pie buffet."
              />
              <figcaption>
                When slices aren't enough, offer a buffet of whole pies!
              </figcaption>
            </figure>
          </li>
        </ul>
      </div>
    );
  }
}

export default Recipes;
