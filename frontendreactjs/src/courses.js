import React, { Component } from "react";
import {
  addTask,
  getTasks,
  updateTask,
  deleteTask,
} from "./services/taskServices";

class Courses extends Component {
  state = { tasks: [], currentTask: "" };

  async componentDidMount() {
    try {
      const { data } = await getTasks();
      this.setState({ tasks: data });
    } catch (error) {
      console.log(error);
      alert("Failed to load tasks. Please try again.");
    }
  }

  handleChange = ({ currentTarget: input }) => {
    this.setState({ currentTask: input.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const originalTasks = this.state.tasks;
    try {
      const { data } = await addTask({ task: this.state.currentTask });
      const tasks = [...originalTasks, data];
      this.setState({ tasks, currentTask: "" });
    } catch (error) {
      console.log(error);
      alert("Failed to add task. Please try again.");
    }
  };

  handleUpdate = async (currentTaskId) => {
    const originalTasks = this.state.tasks;
    try {
      const tasks = [...originalTasks];
      const index = tasks.findIndex((task) => task._id === currentTaskId);
      tasks[index] = { ...tasks[index] };
      tasks[index].completed = !tasks[index].completed;
      this.setState({ tasks });
      await updateTask(currentTaskId, { completed: tasks[index].completed });
    } catch (error) {
      this.setState({ tasks: originalTasks });
      console.log(error);
      alert("Failed to update task. Please try again.");
    }
  };

  handleDelete = async (currentTaskId) => {
    const originalTasks = this.state.tasks;
    try {
      const tasks = originalTasks.filter((task) => task._id !== currentTaskId);
      this.setState({ tasks });
      await deleteTask(currentTaskId);
    } catch (error) {
      this.setState({ tasks: originalTasks });
      console.log(error);
      alert("Failed to delete task. Please try again.");
    }
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.currentTask}
            placeholder="Add task"
          />
          <button type="submit" disabled={!this.state.currentTask}>Add</button>
        </form>
        {this.state.tasks.length === 0 ? (
          <p>No tasks available</p>
        ) : (
          <ul>
            {this.state.tasks.map((task) => (
              <li key={task._id}>
                <span
                  style={{
                    textDecoration: task.completed ? "line-through" : "none",
                  }}
                  onClick={() => this.handleUpdate(task._id)}
                >
                  {task.task}
                </span>
                <button onClick={() => this.handleDelete(task._id)}>Delete</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export default Courses;
