// build your `/api/projects` router here
const express = require('express');
const router = express.Router();

const Project = require('./model');

router.get('/', async (req, res, next)=> {
    try {
        const projects = await Project.getProjects()
    res.status(200).json(projects)

    } catch (err) {
        next(err)
    }
})

router.post('/', async (req, res, next)=> {
    try {

    } catch (err) {
        next(err)
    }
})

module.exports = router;

