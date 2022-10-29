import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice/CounterSlice";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
