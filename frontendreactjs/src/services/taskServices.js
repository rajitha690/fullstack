import axios from "axios";

// The backend URL should already be set at build time from the environment variables
const apiUrl = process.env.REACT_APP_BACKEND_URL;

const api = axios.create({
  baseURL: apiUrl, // Use the base URL from the environment variable
});

// Define functions for API calls

// Get all tasks (courses in your case)
export function getTasks() {
  return api.get("/courses") // Assuming the route is "/courses"
    .then(response => response.data)
    .catch(error => {
      console.error("Error fetching tasks:", error);
      throw error;
    });
}

// Add a new task (course)
export function addTask(task) {
  return api.post("/courses", task) // Post to the /courses route
    .then(response => response.data)
    .catch(error => {
      console.error("Error adding task:", error);
      throw error;
    });
}

// Update an existing task (course)
export function updateTask(id, task) {
  return api.put(`/courses/${id}`, task) // PUT request to update task by id
    .then(response => response.data)
    .catch(error => {
      console.error("Error updating task:", error);
      throw error;
    });
}

// Delete a task (course)
export function deleteTask(id) {
  return api.delete(`/courses/${id}`) // DELETE request to remove task by id
    .then(response => response.data)
    .catch(error => {
      console.error("Error deleting task:", error);
      throw error;
    });
}
