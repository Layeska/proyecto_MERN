import { createContext, useContext, useState } from 'react';
import { getTasksRequest, deleteTasksRequest, createTasksRequest, getTaskRequest, updateTaskRequest, toggleTaskRequest } from '../api/tasks.api';

export const TasksContext = createContext();

export const useTasks = () => {
    const context = useContext(TasksContext);
    if(!context) {
        throw new Error('useTasks must be used within a TasksProvider');
    }
    return context;
}

export const TasksContextProvider = ({children}) => {
    const [tasks, setTasks] = useState([]);

    async function loadTasks() {
        const response = await getTasksRequest();
        setTasks(response.data);
    }

    const deleteTasks = async (id) => {
        try {
            await deleteTasksRequest(id);
            setTasks(tasks.filter(task => task.id !== id));
        } catch(err) {
            console.error(err);
        }
    }

    const createTasks = async(task) => {
        try {
            await createTasksRequest(task);
        } catch(err) {
            console.error(err);
        }
    };

    const getTask = async (id) => {
        try {
            const response = await getTaskRequest(id);
            return response.data;
        } catch(err) {
            console.error(err);
        }
    };

    const updateTasks = async (id, body) => {
        try {
            const result = await updateTaskRequest(id, body);
            console.log(result);
        } catch(err) {
            console.error(err);
        }
    };

    const toggleTasksDone = async (id) => {
        try {
            const taskFound = tasks.find(task => task.id === id);
            await toggleTaskRequest(id, taskFound.done === 0 ? true : false);
            setTasks(tasks.map(task => task.id === id ? task.done = task.done === 0 ? 1 : 0 : task.done));
            setTasks([...tasks]);
        } catch(err) {
            console.error(err);
        }
    }

    return (
        <TasksContext.Provider value={{tasks, loadTasks, deleteTasks, createTasks, getTask, updateTasks, toggleTasksDone}}>
            {children}
        </TasksContext.Provider>
    );
};