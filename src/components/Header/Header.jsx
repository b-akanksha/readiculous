import React from "react";
import { Box, Typography } from "@mui/material";
import { colorConstants } from "../../utils/colorConstants";

const classes = {
  header: {
    display: "flex",
  },
  title: {
    display: "flex",
    flexDirection: "column",
    textAlign: "right",
  },
};
const Header = () => {
  return (
    <Box sx={classes.header}>
      <Box sx={classes.title}>
        <Typography variant="h3" sx={{ color: colorConstants.text.primary }}>
          R
          <span
            style={{
              textDecoration: `5px underline dotted ${colorConstants.text.highlight}`,
            }}
          >
            eadiculous
          </span>
        </Typography>
        <Typography
          variant="subtitle2"
          sx={{ color: colorConstants.text.secondary }}
        >
          Read. Review. Repeat.
        </Typography>
      </Box>
    </Box>
  );
};

export default Header;
