import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice/CounterSlice";
import todosReducer from "./todosSlice/todosSlice";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todos: todosReducer,
  },
});
