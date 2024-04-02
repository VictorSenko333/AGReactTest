import { LoadingView } from "./../../../../app/router/loading-view";
import { Box, Typography } from "@mui/material";
import { useTodosAPI } from "../../../../app/store/todos/todos.hooks";
import { FC, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from '@mui/material'
import { useAppSelector } from "../../../../app/store/hooks";
import { TodosRoutes } from "../../todos.router";

const ViewTodo: FC = () => {
  const todos = useAppSelector((state) => state.todos)
  const navigate = useNavigate()
  console.log(todos)
  const { id } = useParams();

  const { getTodoById, currentTodo, loading } = useTodosAPI();

  useEffect(() => {
    if (id) getTodoById(id);
  }, [id, getTodoById]);

  if (loading) return <LoadingView />;
  if (!currentTodo) return null;

  return (
    <Box>
      <Typography>{currentTodo.todo}</Typography>
      <Typography>Complete: {currentTodo.completed ? '✅' : '❌'}</Typography>

      <Button onClick = {() => navigate(TodosRoutes.Root, { replace: true })}>Back</Button>
    </Box>
  );
};

export default ViewTodo;
