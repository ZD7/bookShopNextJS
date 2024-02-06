import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBook } from "../../types/types";

const initState: IAuthState = {
  loadBooks: [],
  activeCategory: "Architecture",
  booksFromServer: [],
  prevCategory: "Architecture",
};

const slice = createSlice({
  name: "data",
  initialState: initState,
  reducers: {
    setBooks: (state, action: PayloadAction<{ books: IBook[] }>) => {
      state.loadBooks = action.payload.books;
    },
    addChunkBooks: (state, action: PayloadAction<{ сhunkBooks: IBook[] }>) => {
      state.loadBooks = [...state.loadBooks, ...action.payload.сhunkBooks];
    },

    setCategory: (state, action: PayloadAction<{ category: string }>) => {
      state.activeCategory = action.payload.category;
    },

    setPrevCategory: (state, action: PayloadAction<{ category: string }>) => {
      state.prevCategory = action.payload.category;
    },
  },
});

//reducer
export const dataReducer = slice.reducer;

//actions
export const { setBooks, addChunkBooks, setCategory, setPrevCategory } =
  slice.actions;

// types
export interface IAuthState {
  loadBooks: IBook[];
  booksFromServer: IBook[];
  activeCategory: string;
  prevCategory: string;
}
