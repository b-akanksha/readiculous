import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBookData, updateFilter } from "../../redux/slice/bookSlice";
import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  RadioGroup,
  Radio,
} from "@mui/material";
import { colorConstants } from "../../utils/colorConstants";
import BookByYear from "../BookByYear/BookByYear";

const Books = () => {
  const dispatch = useDispatch();
  const { booksByFilter: books, filter } = useSelector((state) => state.book);
  const [bookFilter, SetBookFilter] = useState(filter);
  const labels = Object.keys(books);
  console.log({ labels });

  useEffect(() => {
    dispatch(fetchBookData());
  }, []);

  const handleChange = (event) => {
    SetBookFilter(event.target.value);
    dispatch(updateFilter(event.target.value));
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginY: 2,
        width: "100%",
      }}
    >
      <Box>
        <FormControl>
          <FormLabel
            id="filter-radio"
            sx={{
              color: colorConstants.text.primary,
              "&.MuiFormLabel-root.Mui-focused": {
                color: colorConstants.text.primary,
              },
            }}
          >
            Filter By
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="filter-radio"
            name="row-radio-buttons-group"
            value={bookFilter}
            onChange={handleChange}
          >
            <FormControlLabel
              value="year"
              control={
                <Radio
                  sx={{
                    color: colorConstants.button.primaryButton,
                    "&.Mui-checked": {
                      color: colorConstants.button.hover.primary,
                    },
                  }}
                />
              }
              label="Year"
            />
            <FormControlLabel
              value="genre"
              control={
                <Radio
                  sx={{
                    color: colorConstants.button.primaryButton,
                    "&.Mui-checked": {
                      color: colorConstants.button.hover.primary,
                    },
                  }}
                />
              }
              label="Genre"
            />
          </RadioGroup>
        </FormControl>
      </Box>
      {React.Children.toArray(
        labels.map((label) => (
          <BookByYear label={label} books={books[label]} />
        )),
      )}
    </Box>
  );
};

export default Books;
