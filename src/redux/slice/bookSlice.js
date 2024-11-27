import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { parseCSV } from "../../utils/parseCSV";

const initialState = { books: [] };
const apiUrl = import.meta.env.VITE_GOOGLE_SHEEET_URL;
const apiKey = import.meta.env.VITE_GOOGLE_API_KEY;

const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    getBooks: (state, action) => {
      state.books = [...action.payload];
    },
  },
});

export const { getBooks } = bookSlice.actions;

export default bookSlice.reducer;

export const fetchBookCover = async (isbn) => {
  const response = await axios.get(
    `https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}&key=${apiKey}`,
  );
  const data = response.data;
  if (data.totalItems > 0) {
    return data.items[0].volumeInfo.imageLinks.thumbnail; // Or .smallThumbnail
  }
  return null;
};

export const fetchBookData = () => async (dispatch) => {
  try {
    const response = await axios.get(apiUrl);

    const parsedCsvData = parseCSV(response.data);
    dispatch(getBooks(parsedCsvData));
  } catch (e) {
    dispatch(getBooks([]));
  }
};
