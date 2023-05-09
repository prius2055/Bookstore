import { createSlice } from '@reduxjs/toolkit';

const bookSlice = createSlice({
  name: 'books',
  initialState: [],
  reducers: {
    addBook() {},
    removeBook() {},
  },
});

export const booksActions = bookSlice.actions;
export default bookSlice;
