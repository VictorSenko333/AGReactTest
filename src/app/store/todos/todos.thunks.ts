import { createAsyncThunk } from "@reduxjs/toolkit";
import  TodosService  from "../../api/todos.service";


export const getTodosThunk = createAsyncThunk<
  Awaited<ReturnType<typeof TodosService.getTodosList>>['data'],
  void
>("todos/getList", async () => {
  try {
    const { data } = await TodosService.getTodosList()
    return data;
  } catch (err) {
    // TODO: show toast
    throw err;
  }
});

export const getTodoByIdThunk = createAsyncThunk<
  Awaited<ReturnType<typeof TodosService.getTodosById>>['data'],
  Parameters<typeof TodosService.getTodosById>[0]
>("todos/getTodoById", async (id) => {
  try {
    const { data } = await TodosService.getTodosById(id)
    return data;
  } catch (err) {
    // TODO: show toast
    throw err;
  }
});
export const deleteTodoThunk = createAsyncThunk<
  Awaited<ReturnType<typeof TodosService.deleteTodo>>['data'],
  Parameters<typeof TodosService.deleteTodo>[0]
>("todos/deleteTodo", async (id) => {
  try {
    const { data } = await TodosService.deleteTodo(id)
    return data;
  } catch (err) {
    throw err;
  }
});
export const createTdodoThunk = createAsyncThunk<
  Awaited<ReturnType<typeof TodosService.createTodo>>['data'],
  Parameters<typeof TodosService.createTodo>[0]
>("todos/createTodo", async (args) => {
  try {
    const { data } = await TodosService.createTodo(args)
    return data;
  } catch (err) {
    throw err;
  }
});

export const updateTodoByIdThunk = createAsyncThunk<
  Awaited<ReturnType<typeof TodosService.updateTodoById>>['data'],
  Parameters<typeof TodosService.updateTodoById>[0]
>("todos/updateTodoById", async (args) => {
  try {
    const { data } = await TodosService.updateTodoById(args)
    return data;
  } catch (err) {
    throw err;
  }
});