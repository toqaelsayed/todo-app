import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: 'todo-slice',
  initialState: {
    todos: [],
  },
  reducers: {
    addTodo: (state, action) => {
      state.todos = [...state.todos, action.payload];
    },
    removeTodo: (state, action) => {
      const { title } = action.payload;
      state.todos = state.todos.filter(todo => todo.title !== title);
    },
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;
