import axios from "axios";

// Check and set backend URL
const apiUrl = process.env.REACT_APP_BACKEND_URL;

if (!apiUrl) {
  console.warn("⚠️ REACT_APP_BACKEND_URL is not set. API calls may fail.");
} else {
  console.log("🌐 Backend API Base URL:", apiUrl);
}

// Axios instance with baseURL
const api = axios.create({
  baseURL: apiUrl,
});

// GET: Get all tasks/courses
export function getTasks() {
  return api.get("/courses")
    .then(response => response.data)
    .catch(error => {
      if (error.response && error.response.data) {
        console.error("❌ Error fetching tasks:", error.response.data);
      } else {
        console.error("❌ Error fetching tasks:", error.message);
      }
      throw error;
    });
}

// POST: Add a new task/course
export function addTask(task) {
  return api.post("/courses", task)
    .then(response => response.data)
    .catch(error => {
      if (error.response && error.response.data) {
        console.error("❌ Error adding task:", error.response.data);
      } else {
        console.error("❌ Error adding task:", error.message);
      }
      throw error;
    });
}

// PUT: Update a task/course
export function updateTask(id, task) {
  return api.put(`/courses/${id}`, task)
    .then(response => response.data)
    .catch(error => {
      if (error.response && error.response.data) {
        console.error("❌ Error updating task:", error.response.data);
      } else {
        console.error("❌ Error updating task:", error.message);
      }
      throw error;
    });
}

// DELETE: Delete a task/course
export function deleteTask(id) {
  return api.delete(`/courses/${id}`)
    .then(response => response.data)
    .catch(error => {
      if (error.response && error.response.data) {
        console.error("❌ Error deleting task:", error.response.data);
      } else {
        console.error("❌ Error deleting task:", error.message);
      }
      throw error;
    });
}
