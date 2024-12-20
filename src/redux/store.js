import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "./slice/bookSlice";

const store = configureStore({
  reducer: {
    book: bookReducer,
  },
});

export default store;
