const express = require('express');
const router = express.Router();

let tasks = [
    { id: 1, title: 'Task 1' },
    { id: 2, title: 'Task 2' },
];

// Get all tasks
router.get('/', (req, res) => {
    res.json(tasks);
});

// Get a specific task
router.get('/:id', (req, res) => {
    const taskId = parseInt(req.params.id);
    const task = tasks.find(task => task.id === taskId);

    if (!task) {
        res.status(404).json({ message: 'Task not found' });
    } else {
        res.json(task);
    }
});

// Create a new task
router.post('/', (req, res) => {
    const { title } = req.body;
    const newTask = { id: tasks.length + 1, title };
    tasks.push(newTask);
    res.status(201).json(newTask);
});

// Update a task
router.put('/:id', (req, res) => {
    const taskId = parseInt(req.params.id);
    const taskIndex = tasks.findIndex(task => task.id === taskId);

    if (taskIndex === -1) {
        res.status(404).json({ message: 'Task not found' });
    } else {
        tasks[taskIndex].title = req.body.title;
        res.json(tasks[taskIndex]);
    }
});

// Delete a task
router.delete('/:id', (req, res) => {
    const taskId = parseInt(req.params.id);
    tasks = tasks.filter(task => task.id !== taskId);
    res.json({ message: 'Task deleted successfully' });
});

module.exports = router;
