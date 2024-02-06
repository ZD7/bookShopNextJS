import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBook, IBookInCart } from "../../types/types";

const initState: IAuthState = {
  booksInCart: [],
};

const slice = createSlice({
  name: "cart",
  initialState: initState,
  reducers: {
    addBook: (state, action: PayloadAction<{ book: IBook }>) => {
      state.booksInCart.push(action.payload.book);
    },

    addQuantity: (state, action: PayloadAction<{ bookId: string }>) => {
      const book = state.booksInCart.find(
        (el) => el.id === action.payload.bookId
      );
      if (book !== undefined) {
        book.quantity = book?.quantity !== undefined ? book.quantity + 1 : 2;
        state.booksInCart = state.booksInCart.map((el) =>
          el.id === book.id ? book : el
        );
      }
    },

    deleteQuantity: (state, action: PayloadAction<{ bookId: string }>) => {
      const book = state.booksInCart.find(
        (el) => el.id === action.payload.bookId
      );

      if (book !== undefined) {
        book.quantity = book?.quantity !== undefined ? book.quantity - 1 : 0;

        if (book.quantity === 0) {
          state.booksInCart = state.booksInCart.filter(
            (el) => el.id !== book.id
          );
        } else {
          state.booksInCart = state.booksInCart.map((el) =>
            el.id === book.id ? book : el
          );
        }
      }
    },
  },
});

//reducer
export const cartReducer = slice.reducer;

//actions
export const { addBook, addQuantity, deleteQuantity } = slice.actions;

// types
export interface IAuthState {
  booksInCart: IBookInCart[];
}
