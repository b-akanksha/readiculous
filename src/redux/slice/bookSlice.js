import { createSlice, current } from "@reduxjs/toolkit";
import axios from "axios";
import { parseCSV } from "../../utils/parseCSV";
import { groupedByGenre, segregateBooksByYear } from "../../utils/bookUtil";

const initialState = { books: [], filter: "year", booksByFilter: {} };
const apiUrl = import.meta.env.VITE_GOOGLE_SHEEET_URL;

const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    getBooks: (state, action) => {
      state.books = [...action.payload];
    },
    updateFilter: (state, action) => {
      const books = current(state.books);
      const modifiedBooks =
        action.payload === "year"
          ? segregateBooksByYear(books)
          : groupedByGenre(books);
      state.filter = action.payload;
      state.booksByFilter = { ...modifiedBooks };
    },
  },
});

export const { getBooks, updateFilter } = bookSlice.actions;

export default bookSlice.reducer;

export const fetchBookData = () => async (dispatch) => {
  try {
    const response = await axios.get(apiUrl);
    const parsedCsvData = parseCSV(response.data);
    dispatch(getBooks(parsedCsvData));
    dispatch(updateFilter("year"));
  } catch (e) {
    dispatch(getBooks([]));
  }
};
