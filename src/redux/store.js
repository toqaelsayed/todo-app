import { configureStore } from "@reduxjs/toolkit";
import sliceTodo from "./slices/slice.todo";

export const store = configureStore({
  reducer: {
    todo: sliceTodo.reducer,
  },
});
