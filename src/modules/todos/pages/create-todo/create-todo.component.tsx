/* import { LoadingView } from "@components"; */
import { Box, Button, Checkbox, FormLabel, Input } from "@mui/material";
import { useTodosAPI } from "../../../../app/store/todos/todos.hooks";
import { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Todo } from "../../../../app/types/todos";
import { TodosRoutes } from "../../todos.router";

const defaultValues: Todo = {
  id: 0,
  todo: "",
  userId: 0,
  completed: false,
};

const LoadingView = () => {
  return <div>loading</div>
}
const CreateTodo: FC = () => {
  const navigate = useNavigate();
  const { createTodo, loading } = useTodosAPI();

  const { register, handleSubmit, formState: { errors } } = useForm<Todo>({ defaultValues });

  useEffect(() => {}, []);

  const onFormSubmit = async (data: Todo) => {
    await createTodo(data);
    return navigate(
      TodosRoutes.Root,
      { replace: true }
    );
  };

  const goBack = () => navigate(-1);

  if (loading) return <LoadingView />;

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

export default CreateTodo;
