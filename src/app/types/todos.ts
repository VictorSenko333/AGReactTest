import { ListItemsApiResponse } from "./base";

export interface Todo {
  id: number;
  todo: string;
  completed: boolean;
  userId: number;
}

export interface TodosResponse extends ListItemsApiResponse {
  todos: Todo[];
}
