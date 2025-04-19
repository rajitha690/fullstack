import axios from "axios";

// ✅ Read backend URL from environment variables
const apiUrl = process.env.REACT_APP_BACKEND_URL;

if (!apiUrl) {
  console.warn("⚠️ REACT_APP_BACKEND_URL is not set. API calls may fail.");
} else {
  console.log("🌐 Backend API Base URL:", apiUrl);
}

// ✅ Create an axios instance with baseURL
const api = axios.create({
  baseURL: apiUrl,
});

// ✅ GET: Fetch all tasks (courses)
export function getTasks() {
  return api.get("/courses")
    .then(response => response.data)
    .catch(error => {
      console.error("❌ Error fetching tasks:", error.response?.data || error.message);
      throw error;
    });
}

// ✅ POST: Add a new task
export function addTask(task) {
  return api.post("/courses", task)
    .then(response => response.data)
    .catch(error => {
      console.error("❌ Error adding task:", error.response?.data || error.message);
      throw error;
    });
}

// ✅ PUT: Update a task by ID
export function updateTask(id, task) {
  return api.put(`/courses/${id}`, task)
    .then(response => response.data)
    .catch(error => {
      console.error("❌ Error updating task:", error.response?.data || error.message);
      throw error;
    });
}

// ✅ DELETE: Delete a task by ID
export function deleteTask(id) {
  return api.delete(`/courses/${id}`)
    .then(response => response.data)
    .catch(error => {
      console.error("❌ Error deleting task:", error.response?.data || error.message);
      throw error;
    });
}
