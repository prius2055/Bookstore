import { createSlice } from '@reduxjs/toolkit';
import bookItems from '../../bookItems';

const bookSlice = createSlice({
  name: 'books',
  initialState: { bookArray: bookItems },
  reducers: {
    addBook: (state, action) => {
      const newBookObj = {
        id: state.bookArray.length,
        genre: 'Action',
        title: action.payload,
        author: 'Suzanne Collins',
        percentageCompletion: '64%',
        completed: false,
      };
      state.bookArray.push(newBookObj);
    },
    removeBook: (state, action) => {
      const bookId = action.payload;

 

     state.bookArray= state.bookArray.filter((book) => book.id !== bookId);
    
    },
  },
});

export const { addBook, removeBook } = bookSlice.actions;
export default bookSlice;
