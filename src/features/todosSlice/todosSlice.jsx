import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAsyncTodos = createAsyncThunk(
  "todos/getAsyncTodos",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get("http://localhost:3001/todos");
      return res.data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

const initialState = {
  todos: [],
  loading: false,
  error: null,
};
const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: Date.now(),
        title: action.payload.title,
        completed: false,
      };
      state.todos.push(newTodo);
    },
    toggleTodo: (state, action) => {
      const selectedTodo = state.todos.find(
        (todo) => todo.id === action.payload.id
      );
      selectedTodo.completed = !selectedTodo.completed;
    },
    deleteTodo: (state, action) => {
      const filteredTodos = state.todos.filter(
        (todo) => todo.id !== action.payload.id
      );
      state.todos = filteredTodos;
    },
  },
  extraReducers: {
    [getAsyncTodos.fulfilled]: (state, action) => {
      return { ...state, todos: action.payload, loading: false, error: null };
    },
    [getAsyncTodos.pending]: (state, action) => {
      return { ...state, todos: [], loading: true, error: null };
    },
    [getAsyncTodos.rejected]: (state, action) => {
      return {
        ...state,
        todos: [],
        loading: false,
        error: action.error.massage,
      };
    },
  },
});

export const { addTodo, toggleTodo, deleteTodo } = todosSlice.actions;
export default todosSlice.reducer;
