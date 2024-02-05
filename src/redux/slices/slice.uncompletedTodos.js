// slice.uncompletedTodos.js
import { createSlice } from '@reduxjs/toolkit';

const uncompletedTodoSlice = createSlice({
  name: 'uncompletedTodo-slice',
  initialState: {
    uncompletedTodos: [],
  },
  reducers: {
    addUncompletedTodo: (state, action) => {
      state.uncompletedTodos = [...state.uncompletedTodos, action.payload];
    },
    removeUncompletedTodo: (state, action) => {
      // Assuming action.payload is the todo to be removed
      const todoToRemove = action.payload;
      state.uncompletedTodos = state.uncompletedTodos.filter(todo => todo.id !== todoToRemove.id);
    },
    clearUncompletedTodos: (state) => {
      state.uncompletedTodos = [];
    },
  },
});

export const { addUncompletedTodo, removeUncompletedTodo, clearUncompletedTodos } = uncompletedTodoSlice.actions;
export default uncompletedTodoSlice.reducer;
