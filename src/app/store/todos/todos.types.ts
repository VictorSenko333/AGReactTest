import { Todo } from "../../types";

export interface TodosState {
  todos: Todo[],
  currentTodo: Todo | null,
  loading: boolean
}
