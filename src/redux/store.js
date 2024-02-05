import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./slices/slice.todo";
import completedTodoReducer from "./slices/slice.completedTodos";
import uncompletedTodoReducer from './slices/slice.uncompletedTodos';

export const store = configureStore({
  reducer: {
    todo: todoReducer,
    completedTodo: completedTodoReducer,
    uncompletedTodo: uncompletedTodoReducer,
  },
});
