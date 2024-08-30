// src/redux/filtersSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialFiltersState = {
  name: '',
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState: initialFiltersState,
  reducers: {
    changeFilter(state, action) {
      state.name = action.payload;
    },
  },
});

export const { changeFilter } = filtersSlice.actions;

export const selectNameFilter = state => state.filters.name;

export default filtersSlice.reducer;
