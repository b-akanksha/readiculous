import React, { useEffect, useState } from "react";
import DoneIcon from "@mui/icons-material/Done";
import { Box, Chip } from "@mui/material";
import { colorConstants } from "../../utils/colorConstants";
import Book from "../Book/Book";

const BooksByFilter = ({ labels, books }) => {
  const [booksToShow, setBooksToShow] = useState([]);
  const [selectedLabel, setSelectedLabel] = useState("All");

  const allLabels = ["All", ...labels];
  const handleChipClick = (label) => setSelectedLabel(label);

  useEffect(() => {
    setSelectedLabel("All");
  }, [labels]);
  useEffect(() => {
    let data = [];
    if (labels.includes(selectedLabel)) {
      data = books[selectedLabel];
    } else {
      data = Object.values(books).flat();
    }
    setBooksToShow(data);
  }, [selectedLabel, books]);

  return (
    <div>
      <Box display="flex" justifyContent="center" flexWrap="wrap">
        {React.Children.toArray(
          allLabels.map((label) => (
            <Chip
              label={label}
              onClick={() => handleChipClick(label)}
              icon={
                label === selectedLabel ? (
                  <DoneIcon sx={{ color: colorConstants.background }} />
                ) : null
              }
              sx={{
                backgroundColor:
                  selectedLabel === label
                    ? colorConstants.button.hover.primary
                    : colorConstants.button.primaryButton,
                color:
                  selectedLabel === label
                    ? colorConstants.background
                    : colorConstants.button.primaryButtonText,
                margin: 1,
                "&:hover, &:focus": {
                  backgroundColor: colorConstants.button.hover.primary,
                  color: colorConstants.background,
                },
              }}
            />
          )),
        )}
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
          marginY: 2,
        }}
      >
        {React.Children.toArray(booksToShow.map((book) => <Book {...book} />))}
      </Box>
    </div>
  );
};

export default BooksByFilter;
