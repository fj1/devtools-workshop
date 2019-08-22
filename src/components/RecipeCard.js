import React, { Component } from "react";
import PropTypes from "prop-types";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

class RecipeCard extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      expanded: false
    };
  }

  static propTypes = {
    title: PropTypes.string.isRequired,
    imagePath: PropTypes.string.isRequired,
    calories: PropTypes.string.isRequired
  };

  handleExpandClick = () => {
    this.setState({ expanded: !this.state.expanded });
  };

  render() {
    const { title, imagePath, calories } = this.props;
    return (
      <Card className="card">
        <CardHeader title={title} />
        <CardMedia className="media" image={imagePath} title="Cereal dish" />
        <CardContent>
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
            <Typography paragraph>{calories} Calories</Typography>
          </CardContent>
        </Collapse>
      </Card>
    );
  }
}

export default RecipeCard;
