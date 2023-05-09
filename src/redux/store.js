import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    book: bookReducer,
    categories: categoriesReducer,
  },
});
