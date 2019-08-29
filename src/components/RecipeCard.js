import React, { Component } from "react";
import PropTypes from "prop-types";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { getRecipe, getCalories } from "./RecipeUtils";

class RecipeCard extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      expanded: false
    };
  }

  static propTypes = {
    recipeName: PropTypes.string.isRequired,
    image: PropTypes.object.isRequired
  };

  handleExpandClick = () => {
    this.setState({ expanded: !this.state.expanded });
  };

  render() {
    const { recipeName, image, calories } = this.props;
    return (
      <Card className="card">
        <CardMedia className="media" image={image} title={recipeName} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {recipeName}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Perfect party dish and a fun meal to cook together with your guests.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton
            className={this.state.expanded ? "expand-open" : "expand"}
            onClick={this.handleExpandClick}
            aria-expanded={this.state.expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              {getCalories(recipeName)} Calories
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {getRecipe(recipeName)}
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    );
  }
}

export default RecipeCard;
