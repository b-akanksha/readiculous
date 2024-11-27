import React from "react";
import { Box, Typography } from "@mui/material";

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
        <Typography variant="h3">Readiculous</Typography>
        <Typography variant="subtitle2">Read. Review. Repeat.</Typography>
      </Box>
    </Box>
  );
};

export default Header;
