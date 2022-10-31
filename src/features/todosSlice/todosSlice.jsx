import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    {
      id: 1,
      title: "آهنگ کوش کردن",
      completed: false,
    },
    {
      id: 2,
      title: "مسواک زدن",
      completed: false,
    },
    {
      id: 3,
      title: "درس خوندن",
      completed: false,
    },
    {
      id: 4,
      title: "کتاب خوندن",
      completed: false,
    },
    {
      id: 5,
      title: "فیلم دیدن",
      completed: false,
    },
  ],
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
});

export const { addTodo, toggleTodo, deleteTodo } = todosSlice.actions;
export default todosSlice.reducer;
