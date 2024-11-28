import { Box, Chip, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Img from "../../assets/book.png";
import { fetchBookCover } from "../../redux/slice/bookSlice";
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
  const { name, author, translatedBy, genre, thoughts, isbn } = props;
  const [image, setImage] = useState(Img);

  useEffect(() => {
    if (isbn) {
      fetchBookCover(isbn).then((resp) => {
        if (resp) {
          setImage(resp);
        } else {
          setImage(Img);
        }
      });
    }
  }, [isbn]);

  return (
    <Box sx={{ ...classes.book, ...classes.flex }}>
      <Box sx={{ ...classes.flex, ...classes.coverFlex }} flexBasis={"30%"}>
        <img src={image} alt={name} width={"100%"} />
        <Box sx={{ ...classes.flex, marginY: 1, justifyContent: "center" }}>
          {genre.split("&").length > 0 &&
            genre.split("&").map((gen, index) => (
              <Chip
                label={gen}
                sx={{
                  background: colorConstants.button.primaryButton,
                  color: colorConstants.button.primaryButtonText,
                  marginX: index !== 0 ? 1 : 0,
                }}
              />
            ))}
        </Box>
      </Box>
      <Box marginX={2} flexBasis={"70%"}>
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
