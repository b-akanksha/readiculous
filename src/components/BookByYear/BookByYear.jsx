import React, { useState } from "react";
import { Box, Chip, Divider } from "@mui/material";
import Book from "../Book/Book";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { colorConstants } from "../../utils/colorConstants";

const BookByYear = ({ label, books }) => {
  const [showBooks, setShowBooks] = useState(true);

  const handleChipClick = () => setShowBooks((prevVal) => !prevVal);

  return (
    <>
      <Divider
        textAlign="left"
        sx={{
          "&.MuiDivider-root::after, &.MuiDivider-root::before": {
            borderColor: colorConstants.button.primaryButton,
          },
          width: "88%",
          marginY: 1,
        }}
      >
        <Chip
          label={label}
          onClick={handleChipClick}
          onDelete={handleChipClick}
          deleteIcon={
            <KeyboardArrowDownIcon
              sx={{ rotate: showBooks ? "180deg" : "0deg" }}
            />
          }
          sx={{
            backgroundColor: colorConstants.button.primaryButton,
            color: colorConstants.button.primaryButtonText,
            "&:hover": {
              backgroundColor: colorConstants.button.hover.primary,
            },
          }}
        />
      </Divider>
      {showBooks && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
            marginY: 2,
          }}
        >
          {React.Children.toArray(books.map((book) => <Book {...book} />))}
        </Box>
      )}
    </>
  );
};

export default BookByYear;
