import { createSlice } from "@reduxjs/toolkit";
import products from "../products";

const initialState = {
  products: products,
  items: [],
  total: 0
};

const cartSlice = createSlice({
  name: "cartControl",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
    increaseQuantity: (state, action) => {
      state.items = state.items.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    },
    decreaseQuantity: (state, action) => {
      state.items = state.items.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
    },
    setTotal: (state) => {
      state.total = state.items.reduce(
        (acc, item) => acc + item.quantity * item.price,
        0
      );
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
