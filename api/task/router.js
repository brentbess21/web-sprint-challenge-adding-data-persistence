// build your `/api/tasks` router here
const express = require('express');
const router = express.Router();
const Task = require('./model');

router.get('/', async (req, res, next)=> {
    try {
        const tasks = await Task.getTasks();
        res.status(200).json(tasks);
    } catch (err) {
        next(err);
    }
})

router.post('/', async (req, res, next)=> {
    try {
        const newTask = await Task.insertTask(req.body);
        res.status(201).json(newTask);
    } catch (err) {
        next(err);
    }
})

module.exports = router;