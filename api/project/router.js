// build your `/api/projects` router here
const express = require('express');
const router = express.Router();

const Project = require('./model');

router.get('/', async (req, res, next)=> {
    try {
        const projects = await Project.get()
    res.status(200).json(projects)

    } catch (err) {
        next(err)
    }
})

module.exports = router;

