import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBookData } from "../../redux/slice/bookSlice";
import Book from "../Book/Book";
import { Box } from "@mui/material";

const Books = () => {
  const dispatch = useDispatch();
  const { books } = useSelector(state => state.book);
  useEffect(() => {
    dispatch(fetchBookData());
  }, []);
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '10px'}}>
      {React.Children.toArray(books.map(book => <Book {...book} />))}
    </Box>
  );
};

export default Books;
