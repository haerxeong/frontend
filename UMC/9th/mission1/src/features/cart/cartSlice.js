import reducer from "../modal/modalSlice";
import cartItems from "../../constants/cartItems";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: cartItems,
  amount: 0,
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increase: (state, { payload }) => {
      const itemId = payload;
      const item = state.cartItems.find((cartItem) => cartItem.id === itemId);
      item.amount += 1;
    },

    decrease: (state, { payload }) => {
      const itemId = payload;
      const item = state.cartItems.find((cartItem) => cartItem.id === itemId);
      item.amount -= 1;
    },

    removeItem: (state, { payload }) => {
      const itemId = payload;
      state.cartItems = state.cartItems.filter(
        (cartItem) => cartItem.id !== itemId
      );
    },

    clearCart: (state) => {
      state.cartItems = [];
    },

    calculateTotals: (state) => {
      let amount = 0;
      let total = 0;

      state.cartItems.forEach((item) => {
        amount += item.amount;
        total += item.price * item.amount;
      });

      state.amount = amount;
      state.total = total;
    },
  },
});

export const { increase, decrease, removeItem, clearCart, calculateTotals } =
  cartSlice.actions;

export default cartSlice.reducer;
