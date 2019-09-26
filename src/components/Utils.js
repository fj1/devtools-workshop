import React from "react";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

export const getCopyright = () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link
        color="inherit"
        href="https://epic-chandrasekhar-781210.netlify.com/"
      >
        GHC Dev Tools Workshop
      </Link>{" "}
      {new Date().getFullYear()}
    </Typography>
  );
};
