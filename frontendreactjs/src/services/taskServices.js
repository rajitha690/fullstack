import axios from "axios";

// The backend URL should already be set at build time from the environment variables
const apiUrl = process.env.REACT_APP_BACKEND_URL;

// ✅ Debug log to verify the backend URL being used
console.log("🌐 Backend API Base URL:", apiUrl);

const api = axios.create({
  baseURL: apiUrl, // Use the base URL from the environment variable
});

// Define functions for API calls

// Get all tasks (courses in your case)
export function getTasks() {
  return api.get("/courses")
    .then(response => response.data)
    .catch(error => {
      console.error("Error fetching tasks:", error.response ? error.response.data : error.message);
      throw error;
    });
}

// Add a new task (course)
export function addTask(task) {
  return api.post("/courses", task)
    .then(response => response.data)
    .catch(error => {
      console.error("Error adding task:", error.response ? error.response.data : error.message);
      throw error;
    });
}

// Update an existing task (course)
export function updateTask(id, task) {
  return api.put(`/courses/${id}`, task)
    .then(response => response.data)
    .catch(error => {
      console.error("Error updating task:", error.response ? error.response.data : error.message);
      throw error;
    });
}

// Delete a task (course)
export function deleteTask(id) {
  return api.delete(`/courses/${id}`)
    .then(response => response.data)
    .catch(error => {
      console.error("Error deleting task:", error.response ? error.response.data : error.message);
      throw error;
    });
}
