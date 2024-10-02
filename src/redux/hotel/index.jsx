import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: '',
};

export const hotelSlice = createSlice({
  name: 'hotel',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = hotelSlice.actions;

export default hotelSlice.reducer;
