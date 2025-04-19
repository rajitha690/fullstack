const Task = require("../models/task");
const express = require("express");
const router = express.Router();

// Create a new task
router.post("/", async (req, res) => {
    try {
        const task = new Task(req.body);
        const savedTask = await task.save();
        res.status(201).json(savedTask);
    } catch (error) {
        console.error("POST /courses error:", error);
        res.status(500).json({ error: "Failed to create task" });
    }
});

// Get all tasks
router.get("/", async (req, res) => {
    try {
        const tasks = await Task.find();
        res.status(200).json(tasks);
    } catch (error) {
        console.error("GET /courses error:", error);
        res.status(500).json({ error: "Failed to fetch tasks" });
    }
});

// Update a task
router.put("/:id", async (req, res) => {
    try {
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!task) return res.status(404).json({ error: "Task not found" });
        res.status(200).json(task);
    } catch (error) {
        console.error("PUT /courses/:id error:", error);
        res.status(500).json({ error: "Failed to update task" });
    }
});

// Delete a task
router.delete("/:id", async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id);
        if (!task) return res.status(404).json({ error: "Task not found" });
        res.status(200).json({ message: "Task deleted successfully" });
    } catch (error) {
        console.error("DELETE /courses/:id error:", error);
        res.status(500).json({ error: "Failed to delete task" });
    }
});

module.exports = router;
