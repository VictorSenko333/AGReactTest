import { useCallback } from "react";
import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../types";
import { useAppDispatch, useAppSelector } from "../hooks";
import {
  getTodoByIdThunk,
  getTodosThunk,
  updateTodoByIdThunk,
  createTdodoThunk,
  deleteTodoThunk
} from "./todos.thunks";
import { clearTodosAction } from "./todos.actions";

const getTodos = (state: RootState) => state.todos;
const getTodosState = createSelector(getTodos, (state) => state);

export const useTodosAPI = () => {
  const dispatch = useAppDispatch();
  const state = useAppSelector(getTodosState);

  const clearTodos = useCallback(
    () => dispatch(clearTodosAction()),
    [dispatch]
  );

  const getTodos = useCallback(
    (...args: Parameters<typeof getTodosThunk>) =>
      dispatch(getTodosThunk(...args)),
    [dispatch]
  );
  const deleteTodo = useCallback(
    (...args: Parameters<typeof deleteTodoThunk>) =>
      dispatch(deleteTodoThunk(...args)),
    [dispatch]
  );
  const createTodo = useCallback(
    (...args: Parameters<typeof createTdodoThunk>) =>
      dispatch(createTdodoThunk(...args)),
    [dispatch]
  );

  const getTodoById = useCallback(
    (...args: Parameters<typeof getTodoByIdThunk>) =>
      dispatch(getTodoByIdThunk(...args)),
    [dispatch]
  );

  const updateTodoById = useCallback(
    (...args: Parameters<typeof updateTodoByIdThunk>) =>
      dispatch(updateTodoByIdThunk(...args)),
    [dispatch]
  );

  return {
    ...state,
    getTodos,
    clearTodos,
    createTodo,
    deleteTodo,
    getTodoById,
    updateTodoById
  };
};
