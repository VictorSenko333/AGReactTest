import { Todo, TodosResponse } from "./../types";
import ApiService from "./base.service";

class Service {
  static getTodosList() {
    return ApiService.get<TodosResponse>('/todos')
  }

  static getTodosById(id: string | number) {
    return ApiService.get<Todo>(`/todos/${id}`)
  }
  static createTodo(data: Todo) {
    return ApiService.post<Todo>(`/todos/add`, {...data})
  }
  static deleteTodo(id: any) {
    return ApiService.delete<void>(`/todos/${id}`)
  }

  static updateTodoById(data: Todo) {
    return ApiService.put<Todo>(`/todos/${data.id}`, { completed : data.completed})
  }
}

export default  Service;