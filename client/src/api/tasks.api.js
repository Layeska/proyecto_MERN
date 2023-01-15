import axios from 'axios';
const API_URL = import.meta.env.VITE_URL;
const API_LOCAL = import.meta.env.VITE_LOCAL;

export const getTasksRequest = async () => await axios.get(`${API_LOCAL}/tasks`);

export const createTasksRequest = async (tasks) => await axios.post(`${API_LOCAL}/tasks`, tasks);

export const deleteTasksRequest = async (id) => await axios.delete(`${API_LOCAL}/tasks/${id}`);

export const getTaskRequest = async (id) => await axios.get(`${API_LOCAL}/tasks/${id}`);

export const updateTaskRequest = async (id, newTask) => await axios.put(`${API_LOCAL}/tasks/${id}`, newTask);

export const toggleTaskRequest = async (id, done) => await axios.put(`${API_LOCAL}/tasks/${id}`, {done});