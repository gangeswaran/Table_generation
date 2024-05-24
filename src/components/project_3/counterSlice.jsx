// counterSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
    carts: [],
    showCart: false
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    addCart: (state, action) => {
      state.carts.push(action.payload);
    },
    toggleCart: (state) => {
      state.showCart = !state.showCart;
    }
  },
});

export const { increment, addCart, toggleCart } = counterSlice.actions;

export default counterSlice.reducer;
