import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { parseCSV } from "../../utils/parseCSV";

const initialState = { books: [] };
const apiUrl = import.meta.env.VITE_GOOGLE_SHEEET_URL;

const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    getBooks: (state, action) => {
      console.log({ action });
      state.books = [...action.payload];
    },
  },
});

export const { getBooks } = bookSlice.actions;

export default bookSlice.reducer;

export const fetchBookData = () => async (dispatch) => {
  try {
    const response = await axios.get(apiUrl);

    const parsedCsvData = parseCSV(response.data);
    const modifiedData = parsedCsvData.map((data) => {
      const imgLink = data.isbn;
      return {
        ...data,
        img: imgLink
          ? `https://covers.openlibrary.org/b/isbn/${imgLink}-L.jpg`
          : null,
      };
    });
    dispatch(getBooks(modifiedData));
  } catch (e) {
    dispatch(getBooks([]));
  }
};
