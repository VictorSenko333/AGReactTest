import { createReducer } from "@reduxjs/toolkit";
import { clearTodosAction } from "./todos.actions";
import { preloadedState } from "./todos.preloaded-state";
import { getTodosThunk, getTodoByIdThunk, updateTodoByIdThunk } from "./todos.thunks";

export const todosReducer = createReducer(preloadedState, (builder) =>
  builder
    .addCase(getTodosThunk.pending, (state) => {
      state.loading = true;
    })
    .addCase(getTodosThunk.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.todos = payload.todos;
    })
    .addCase(getTodosThunk.rejected, (state) => {
      state.loading = preloadedState.loading;
      state.todos = preloadedState.todos;
    })

    .addCase(getTodoByIdThunk.pending, (state) => {
      state.loading = true;
    })
    .addCase(getTodoByIdThunk.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.currentTodo = payload;
    })
    .addCase(getTodoByIdThunk.rejected, (state) => {
      state.loading = preloadedState.loading;
      state.todos = preloadedState.todos;
    })

    .addCase(updateTodoByIdThunk.fulfilled, (state, {payload }) => {
      state.todos = state.todos.map(todo => {
        if(todo.id === payload.id){
          return {...todo, completed: payload.completed}
        }return todo
      })
      state.currentTodo = payload
    })




    .addCase(clearTodosAction, () => preloadedState)
);
