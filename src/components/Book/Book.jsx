import { Box, Chip, Typography } from "@mui/material";
import React from "react";
import Img from "../../assets/book.png";
import { colorConstants } from "../../utils/colorConstants";

const classes = {
  book: {
    borderRadius: "10px",
    padding: "20px",
    backgroundColor: colorConstants.card.background,
    border: colorConstants.card.border,
    width: { xs: "100%", md: "40%", lg: "40%", xl: "40%" },
    margin: 2,
  },
  bookTitle: {
    color: colorConstants.text.highlight,
  },
  bookAuthor: {
    color: colorConstants.text.primary,
  },
  bookTranslatedBy: {
    color: colorConstants.text.secondary,
  },
  flex: {
    display: "flex",
    flexWrap: { xs: "wrap", md: "nowrap" },
  },
  coverFlex: {
    flexDirection: "column",
    alignItems: "center",
  },
};
const Book = (props) => {
  const { name, author, translatedBy, genre, thoughts } = props;

  return (
    <Box sx={{ ...classes.book, ...classes.flex }}>
      <Box
        sx={{ ...classes.flex, ...classes.coverFlex }}
        flexBasis={{ sm: "100%", md: "30%" }}
      >
        <img src={Img} alt={name} width={"109.44px"} height="109.44px" />
        <Box
          sx={{
            ...classes.flex,
            marginY: 1,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {genre.split("&").length > 0 &&
            genre.split("&").map((gen, index) => (
              <Chip
                label={gen}
                sx={{
                  background: colorConstants.button.primaryButton,
                  color: colorConstants.button.primaryButtonText,
                  marginX: index !== 0 ? 1 : 0,
                  marginY: 1,
                }}
              />
            ))}
        </Box>
      </Box>
      <Box marginX={{ sm: 0, md: 2 }} flexBasis={{ sm: "100%", md: "70%" }}>
        <Box>
          <Typography variant="h4" sx={classes.bookTitle}>
            {name}
          </Typography>
          <Box sx={{ marginBottom: 2 }}>
            <Typography variant="subtitle2" sx={classes.bookAuthor}>
              By {author}
            </Typography>
            {translatedBy && (
              <Typography variant="caption" sx={classes.bookTranslatedBy}>
                Translated by {translatedBy}
              </Typography>
            )}
          </Box>
        </Box>
        <Typography variant="body1">{thoughts}</Typography>
      </Box>
    </Box>
  );
};

export default Book;
