import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Recipes from "./Recipes";
import { getCopyright } from "./Utils";

class RecipeContainer extends Component {
  render() {
    return (
      <Container maxWidth="sm">
        <Box my={4}>
          <Typography variant="h4" component="h1" gutterBottom>
            What's for dinner?
          </Typography>
          <Recipes />
          {getCopyright()}
        </Box>
      </Container>
    );
  }
}

export default RecipeContainer;
