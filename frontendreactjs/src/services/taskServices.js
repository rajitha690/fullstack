import axios from "axios";

const apiUrl = process.env.REACT_APP_BACKEND_URL;

export function getTasks() {
  return axios.get(apiUrl + "/courses");
}

export function addTask(task) {
  return axios.post(apiUrl + "/courses", task);
}

export function updateTask(id, task) {
  return axios.put(apiUrl + "/courses/" + id, task);
}

export function deleteTask(id) {
  return axios.delete(apiUrl + "/courses/" + id);
}
