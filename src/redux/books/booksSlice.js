import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import bookItems from '../../bookItems';

//

const url =
  'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/ZgThNdN6JfpATUzZm9ZI/books';

// Getting books from API
export const getBooks = createAsyncThunk('books/getBooks', async (thunkAPI) => {
  try {
    const res = await axios(url);
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue('Something went wrong');
  }
});

// Post book to API
export const postBook = createAsyncThunk('book/postBook', async (payload) => {
  const post = await axios.post(url, payload);
  return post.data;
});

// Delete book from API
export const delBook = createAsyncThunk('book/deleteBook', async (id) => {
  const response = await axios.delete(`${url}/${id}`);
  return response.data;
});

const bookSlice = createSlice({
  name: 'books',
  initialState: { bookArray: bookItems, isLoading: false, error: undefined },
  reducers: {
    addBook: (state, { payload }) => {
      state.bookArray.push(payload);
    },
    removeBook: (state, action) => {
      const bookId = action.payload;
      state.bookArray = state.bookArray.filter(
        (book) => book.item_id !== bookId
      );
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getBooks.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getBooks.fulfilled, (state, action) => {
      state.isLoading = false;
      const arrayOfBookObjects = Object.entries(action.payload).flatMap(
        ([key, values]) => values.map((value) => ({ ...value, item_id: key }))
      );
      state.bookArray = arrayOfBookObjects;
    });

    builder.addCase(getBooks.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    builder.addCase(postBook.fulfilled, (state) => {
      state.isLoading = false;
    });
    builder.addCase(delBook.fulfilled, (state, action) => {
      state.isLoading = false;
      const arrayOfBookObjects = Object.entries(action.payload).flatMap(
        ([key, values]) => values.map((value) => ({ ...value, item_id: key }))
      );
      state.bookArray = arrayOfBookObjects;
    });
  },
});

export const { addBook, removeBook } = bookSlice.actions;
export default bookSlice;
