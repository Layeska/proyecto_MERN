import { pool } from "../database.js";

const getTasks = async (req, res) => {
    try {
        const [result] = await pool.query("SELECT * FROM tasks ORDER BY CREATEAt ASC");
        res.json(result);
    } catch(error) {
        return res.status(500).json({message: error.message});
    }
};

const getTask = async(req, res) => {
    try {
        const [result] = await pool.query("SELECT * FROM tasks WHERE id = ?", [req.params.id]);
        return result.length === 0 ? 
        res.status(404).json({message: "Tarea no encontrada!"}) : res.json(result[0]);
    } catch(error) {
        return res.status(500).json({message: error.message});
    }
};

const createTasks = async (req, res) => {
    try {
        const { title, description } = req.body;
        const [result] = await pool.query("INSERT INTO tasks (title, description) VALUES (?, ?)", [title, description]);
        res.json({
            id: result.insertId, 
            title, 
            description
        });
    } catch(error) {
        return res.status(500).json({message: error.message});
    }
};

const updateTasks = async (req, res) => {
    try {
        const result = await pool.query("UPDATE tasks SET ? WHERE id = ?",
        [req.body, req.params.id]);
        res.json(result);
    } catch(error) {
        return res.status(500).json({message: error.message});
    }
};

const deleteTasks = async (req, res) => {
    try {
        const [result] = await pool.query("DELETE FROM tasks WHERE id = ?", [req.params.id]);
        return result.affectedRows === 0 ? 
        res.status(404).json({message: "Tarea no encontrada"}) : res.json(result[0]);
    } catch(error) {
        return res.status(500).json({message: error.message});
    }
};

export { getTasks, getTask, createTasks, updateTasks, deleteTasks };