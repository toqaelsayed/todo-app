// slice.completedTodos.js
import { createSlice } from '@reduxjs/toolkit';

const completedTodoSlice = createSlice({
  name: 'completedTodos',  // Fix the name to 'completedTodos'
  initialState: {
    completedTodos: [],
  },
  reducers: {
    addCompletedTodo: (state, action) => {
      state.completedTodos = [...state.completedTodos, action.payload];
    },
    removeCompletedTodo: (state, action) => {
      // Assuming action.payload is the todo to be removed
      const todoToRemove = action.payload;
      state.completedTodos = state.completedTodos.filter(todo => todo.id !== todoToRemove.id);
    },
    clearCompletedTodos: (state) => {
      state.completedTodos = [];
    },
  },
});

export const { addCompletedTodo, removeCompletedTodo, clearCompletedTodos } = completedTodoSlice.actions;
export default completedTodoSlice.reducer;
