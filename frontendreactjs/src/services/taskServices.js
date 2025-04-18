import axios from "axios";

// The backend URL is set in your .env file and already includes "/courses"
const apiUrl = process.env.REACT_APP_BACKEND_URL;

// ✅ Log to verify it's being read correctly
console.log("🌐 Backend API Base URL:", apiUrl);

const api = axios.create({
  baseURL: apiUrl,
});

// Get all courses
export function getTasks() {
  return api.get("") // No extra /courses
    .then(response => response.data)
    .catch(error => {
      console.error("Error fetching tasks:", error.response ? error.response.data : error.message);
      throw error;
    });
}

// Add a new course
export function addTask(task) {
  return api.post("", task) // No extra /courses
    .then(response => response.data)
    .catch(error => {
      console.error("Error adding task:", error.response ? error.response.data : error.message);
      throw error;
    });
}

// Update a course by ID
export function updateTask(id, task) {
  return api.put(`/${id}`, task) // Only append the ID
    .then(response => response.data)
    .catch(error => {
      console.error("Error updating task:", error.response ? error.response.data : error.message);
      throw error;
    });
}

// Delete a course by ID
export function deleteTask(id) {
  return api.delete(`/${id}`) // Only append the ID
    .then(response => response.data)
    .catch(error => {
      console.error("Error deleting task:", error.response ? error.response.data : error.message);
      throw error;
    });
}
