import { createSlice } from '@reduxjs/toolkit';

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: [],
  reducer: {
    status(state) {
      return state;
    },
  },
});

export const categoriesAction = categoriesSlice.actions;
export default categoriesSlice;
