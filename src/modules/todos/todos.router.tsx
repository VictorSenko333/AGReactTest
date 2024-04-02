import { Suspense, lazy } from "react";
import { EditTodo, Todos, ViewTodo, CreateTodo, DeleteTodo } from "./pages";
/* import { ErrorView, LoadingView } from "@components"; */

const TodosLayout = lazy(() => import("./todos.layout"));

export enum TodosRoutes {
  Root = "/todos",
  TodosList = "",
  ViewTodoById = ":id",
  EditTodoById = "edit/:id",
  CreateTodo = "create",
  DeleteTodo= "delete/:id"
}

const LoadingView = () => {
    return <div>123</div>
}
export const TodosModule = {
  path: TodosRoutes.Root,
 /*  errorElement: <ErrorView />, */
  children: [
    {
      path: TodosRoutes.TodosList,
      element: (
        <Suspense fallback={<LoadingView />}>
          <TodosLayout />
        </Suspense>
      ),
      children: [
        {
          path: '',
          element: <Todos />
        }
      ],
    },
    {
      path: TodosRoutes.ViewTodoById,
      element: <ViewTodo />,
    },
    {
      path: TodosRoutes.CreateTodo,
      element: <CreateTodo />,
    },
    {
      path: TodosRoutes.DeleteTodo,
      element: <DeleteTodo />,
    },
    {
      path: TodosRoutes.EditTodoById,
      element: <EditTodo />,
    },
  ],
};