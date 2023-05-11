import { createSlice } from '@reduxjs/toolkit';
import bookItems from '../../bookItems';

const bookSlice = createSlice({
  name: 'books',
  initialState: { bookArray: bookItems },
  reducers: {
    addBook: (state, action) => {
      const newBookObj = {
        item_id: `item${state.bookArray.length + 1}`,
        category: 'Action',
        title: action.payload,
        author: 'Suzanne Collins',
      };
      state.bookArray.push(newBookObj);
    },
    removeBook: (state, action) => {
      const bookId = action.payload;
      state.bookArray = state.bookArray.filter(
        (book) => book.item_id !== bookId
      );
    },
  },
});

export const { addBook, removeBook } = bookSlice.actions;
export default bookSlice;
