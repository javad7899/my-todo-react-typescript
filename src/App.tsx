import { Button, Container, Grid, Stack, TextField } from "@mui/material";
import { FC, useState, ChangeEvent } from "react";
import { ITask } from "./interface/todoInterfaces";
import TodoList from "./components/TodoList";
const App: FC = () => {
  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<number | null>(null);
  const [todoList, setTodoList] = useState<ITask[]>([]);
  const handleTodoChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "todo") {
      setTask(event.target.value);
    }
    if (event.target.name === "deadline") {
      setDeadline(Number(event.target.value));
    }
  };
  const addTask = (): void => {
    const newTask = { taskName: task, deadline: deadline };
    setTodoList([...todoList, newTask]);
    setTask("");
    setDeadline(null);
  };
  const deleteTask = (taskToDelete: string): void => {
    setTodoList(
      todoList.filter((task) => {
        return task.taskName !== taskToDelete;
      })
    );
  };
  return (
    <Container>
      <Stack className="todo">
        <Grid container spacing={2} className="todo__header">
          <Grid item xs={12} md={6} lg={4}>
            <TextField
              value={task}
              name="todo"
              label="Todo"
              variant="outlined"
              onChange={handleTodoChange}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <TextField
              value={deadline}
              type="number"
              name="deadline"
              label="Deadline (in Days)"
              variant="outlined"
              onChange={handleTodoChange}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4} className="todo__header-btn">
            <Button variant="contained" onClick={addTask}>
              Add Task
            </Button>
          </Grid>
        </Grid>
        <Stack className="todo__todolist-container">
          {todoList.map((task: ITask, index) => {
            return <TodoList key={index} task={task} deleteTask={deleteTask} />;
          })}
        </Stack>
      </Stack>
    </Container>
  );
};
export default App;
