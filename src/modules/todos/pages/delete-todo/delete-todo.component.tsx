/* import { LoadingView } from "@components"; */
import { Box, Button} from "@mui/material";
import { useTodosAPI } from "../../../../app/store/todos/todos.hooks";
import { FC } from "react";
import { useNavigate, useParams } from "react-router-dom";
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
const DeleteTodo: FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { deleteTodo, loading } = useTodosAPI();

  const deleteClick = async () => {
    console.log(id)
    await deleteTodo(id);
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
        flexDirection: 'column'
      }}
    >     <Box>Are you sure you want to delete the task?</Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
                <Button type="submit" onClick = {deleteClick}>Delete</Button>
                <Button type="button" color="error" onClick={goBack}>
                  Back
                </Button>
          </Box>
    </Box>
  );
};

export default DeleteTodo;
