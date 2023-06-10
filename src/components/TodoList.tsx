import { IconButton, Stack, Typography } from "@mui/material";
import { ITask } from "../interface/todoInterfaces";
import DeleteIcon from "@mui/icons-material/Delete";
interface ITodoListProps {
  task?: ITask;
  deleteTask(taskToDelete?: string): void;
}
const TodoList = ({ task, deleteTask }: ITodoListProps) => {
  return (
    <Stack direction="row" className="todo__todolist-child">
      <Stack
        direction="row"
        spacing={2}
        className="todo__todolist-child-content"
      >
        <div>
          <Typography variant="body1">{task?.taskName}</Typography>
        </div>
        <div>
          <Typography variant="body2" color="Highlight">
            {task?.deadline} days
          </Typography>
        </div>
      </Stack>
      <IconButton
        color="error"
        className="todo__todolist-child-btn"
        onClick={() => deleteTask(task?.taskName)}
      >
        <DeleteIcon />
      </IconButton>
    </Stack>
  );
};

export default TodoList;
