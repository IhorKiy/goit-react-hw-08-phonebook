import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const filterSlice = createSlice({
  name: 'inputFilter',
  initialState,
  reducers: {
    addFilter: (state, action) => action.payload,
  },
});

export const { addFilter } = filterSlice.actions;

export default filterSlice.reducer;
export const contactsReducer = filterSlice.reducer;
