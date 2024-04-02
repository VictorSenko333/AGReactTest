/* import { LoadingView } from "@components"; */
import { Box, Button, Checkbox, FormLabel, Input } from "@mui/material";
import { useTodosAPI } from "../../../../app/store/todos/todos.hooks";
import { FC, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Todo } from "./../../../../app/types/todos";
import { TodosRoutes } from "./../../todos.router";

const defaultValues: Todo = {
  id: 0,
  todo: "",
  userId: 0,
  completed: false,
};

const LoadingView = () => {
  return <div>loading</div>
}
const EditTodo: FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getTodoById, updateTodoById, currentTodo, loading } = useTodosAPI();

  const { register, handleSubmit, reset, formState: { errors } } = useForm<Todo>({ defaultValues });
 
  useEffect(() => {
    if (id) getTodoById(id);
  }, [id, getTodoById]);

  useEffect(() => {
    if (currentTodo) reset(currentTodo);
  }, [currentTodo, reset]);

  useEffect(() => {}, []);

  const onFormSubmit = async (data: Todo) => {
    await updateTodoById(data);
    return navigate(
      `${TodosRoutes.Root}/${data.id}`,
      { replace: true }
    );
  };

  const goBack = () => navigate(-1);

  if (loading) return <LoadingView />;
  if (!currentTodo) return null;

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <form onSubmit={handleSubmit(onFormSubmit)}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <FormLabel>Todo</FormLabel>
            <Input
              sx={{ width: "700px" }}
              placeholder="Todo"
              error={!!errors.todo}
              {...register("todo", { required: true })}
            />
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", width: "100%" }}>
            <FormLabel>Complete</FormLabel>
            <Checkbox {...register("completed")} />
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Button type="submit">Submit</Button>
            <Button type="button" color="error" onClick={goBack}>
              Back
            </Button>
          </Box>
        </Box>
      </form>
    </Box>
  );
};

export default EditTodo;
