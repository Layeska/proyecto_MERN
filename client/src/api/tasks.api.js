import axios from 'axios';

export const getTasksRequest = async () => await axios.get('http://localhost:8000/tasks');

export const createTasksRequest = async (tasks) => await axios.post('http://localhost:8000/tasks', tasks);

export const deleteTasksRequest = async (id) => await axios.delete(`http://localhost:8000/tasks/${id}`);

export const getTaskRequest = async (id) => await axios.get(`http://localhost:8000/tasks/${id}`);

export const updateTaskRequest = async (id, newTask) => await axios.put(`http://localhost:8000/tasks/${id}`, newTask);

export const toggleTaskRequest = async (id, done) => await axios.put(`http://localhost:8000/tasks/${id}`, {done});