import React from "react";
import { Paper, TextField, Checkbox, Button } from "@material-ui/core";
import {
  getTasks,
  addTask,
  updateTask,
  deleteTask,
} from "./services/taskService"; // Adjust path if needed
import "./App.css";

class App extends React.Component {
  state = {
    tasks: [],
    currentTask: "",
  };

  async componentDidMount() {
    try {
      const tasks = await getTasks();
      this.setState({ tasks });
    } catch (error) {
      console.error("Failed to load tasks:", error);
    }
  }

  handleChange = (e) => {
    this.setState({ currentTask: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { currentTask } = this.state;
    if (!currentTask.trim()) return;

    try {
      const newTask = await addTask({ task: currentTask });
      this.setState((prevState) => ({
        tasks: [...prevState.tasks, newTask],
        currentTask: "",
      }));
    } catch (error) {
      console.error("Failed to add task:", error);
    }
  };

  handleUpdate = async (taskId) => {
    try {
      await updateTask(taskId);
      const updatedTasks = this.state.tasks.map((task) =>
        task._id === taskId ? { ...task, completed: !task.completed } : task
      );
      this.setState({ tasks: updatedTasks });
    } catch (error) {
      console.error("Failed to update task:", error);
    }
  };

  handleDelete = async (taskId) => {
    try {
      await deleteTask(taskId);
      const updatedTasks = this.state.tasks.filter((task) => task._id !== taskId);
      this.setState({ tasks: updatedTasks });
    } catch (error) {
      console.error("Failed to delete task:", error);
    }
  };

  render() {
    const { tasks, currentTask } = this.state;

    return (
      <div className="main-content">
        <Paper elevation={3} className="perseverance-container">
          <form onSubmit={this.handleSubmit} className="task-form">
            <TextField
              variant="outlined"
              size="small"
              className="task-input"
              value={currentTask}
              required={true}
              onChange={this.handleChange}
              placeholder="Add Your Interested Courses"
            />
            <Button className="add-task-btn" color="primary" variant="outlined" type="submit">
              Add Course
            </Button>
          </form>
          <div className="tasks-list">
            {tasks.map((task) => (
              <Paper key={task._id} className="task-item">
                <Checkbox
                  checked={task.completed}
                  onClick={() => this.handleUpdate(task._id)}
                  color="primary"
                />
                <div className={task.completed ? "task-text completed" : "task-text"}>
                  {task.task}
                </div>
                <Button
                  onClick={() => this.handleDelete(task._id)}
                  color="secondary"
                  className="delete-task-btn"
                >
                  Delete
                </Button>
              </Paper>
            ))}
          </div>
        </Paper>
      </div>
    );
  }
}

export default App;
