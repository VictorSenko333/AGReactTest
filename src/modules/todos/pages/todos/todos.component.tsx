import { TodosState } from "./../../../../app/constants/todos.constants";
import { TodosRoutes } from "./../../todos.router";
import { Box, Button, Typography } from "@mui/material";
import { useTodosAPI } from "../../../../app/store/todos/todos.hooks";
import { FC, useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

export const Todos: FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [todosState, setTodosState] = useState<TodosState | null>(null);
  const { getTodos, todos } = useTodosAPI();
  const navigate = useNavigate();

  useEffect(() => {
    getTodos()
  }, [getTodos]);

  useEffect(() => {
    const type = searchParams.get('type');
    if (!type) setSearchParams({ type: TodosState.All })
  }, [searchParams, setSearchParams])

  useEffect(() => {
    const type = searchParams.get('type');
    if (type) setTodosState(type as TodosState);
  }, [searchParams]);
  const filteredTodos = todos.filter(todo => {
    if (todosState === TodosState.Complete) return todo.completed === true;
    if (todosState === TodosState.Incomplete) return todo.completed === false;
    return true
  })

  const viewToDo = (id: number) => (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    return navigate(TodosRoutes.ViewTodoById.replace(':id', id.toString()))
  }

  const editToDo = (id: number) => (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    return navigate(TodosRoutes.EditTodoById.replace(':id', id.toString()))
  }
  const deleteTodo = (id: number) => (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    return navigate(TodosRoutes.DeleteTodo.replace(':id', id.toString()))
  }

  return <section>
    {filteredTodos.map(({ id, todo, completed }) => (
      <Box sx={{ display: 'flex', alignItems: 'center', marginLeft: '20px' }} key={id} >
        <Typography sx = {{minWidth: '600px'}}>
            {todo}
        </Typography>
        <Typography>Complete: {completed ? '✅' : '❌'}</Typography>
        <Button onClick={viewToDo(id)}>View</Button>
        <Button color="info" onClick={editToDo(id)}>Edit</Button>
        <Button color="error" onClick={deleteTodo(id)}>Delete</Button>
      </Box>
    ))}
  </section>;
};
