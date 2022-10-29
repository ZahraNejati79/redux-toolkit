import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducre: {
    increment: (state, action) => {
      state.value += 1;
    },
    decrement: (state, action) => {
      state.value += 1;
    },
  },
});
export const { increment, decrement } = counterSlice.action;
export default counterSlice = counterSlice.reducer;
