import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalAmount: 0,
};

const calculateTotalAmount = (items) => {
  return items.reduce((total, item) => total + item.price, 0);
};

const cartslice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add(state, action) {
      const newItem = action.payload;
      state.items.push(newItem);
      state.totalAmount = calculateTotalAmount(state.items);
    },
    remove(state, action) {
      const removedItemId = action.payload;
      const removedItem = state.items.find(item => item.id === removedItemId);
      if (removedItem) {
        state.totalAmount -= removedItem.price;
        state.items = state.items.filter(item => item.id !== removedItemId);
      }
    },
    clear(state) {
      state.items = [];
      state.totalAmount = 0;
    },
  },
});

export const { add, remove, clear } = cartslice.actions;

export default cartslice.reducer;
