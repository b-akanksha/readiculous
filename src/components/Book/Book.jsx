import { Box, Typography } from "@mui/material";
import React from "react";
import Img from '../../assets/book.png';
const classes = {
  book: {
    border: "3px ridge #fff",
    borderRadius: "5px",
    padding: "20px",
    boxShadow: "5px 5px 15px rgba(0, 0, 0, 0.3)",
    maxWidth: "400px",
    margin: "20px auto",
    textAlign: "center",
    color: "#fff",
    width: '25%'
  },
  bookTitle: {
    marginBottom: "10px",
  },
};
const Book = (props) => {
  const { name, author, translatedBy, genre, img, thoughts } = props;
  return (
    <Box sx={classes.book}>
      <img src={img || Img} alt={name} width={'200px'} />
      <Typography variant="h6" sx={classes.bookTitle}>
        {name}
      </Typography>
      <Typography variant="body1">{author} {translatedBy && `(Translated by: ${translatedBy})`}</Typography>
      <Typography variant="subtitle1">{genre}</Typography>
      <Typography variant="subtitle1">{thoughts}</Typography>
    </Box>
  );
};

export default Book;
