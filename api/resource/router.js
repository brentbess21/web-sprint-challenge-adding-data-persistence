// build your `/api/resources` router here
const express = require('express');
const router = express.Router();
const Resource = require('./model');

router.get('/', async (req, res, next)=> {
    try {
        const resources = await Resource.getResources()
        res.status(200).json(resources)
    } catch (err) {
        next(err)
    }
})

router.post('/', async (req, res, next)=> {
    try {
        const newResource = await Resource.insertResource(req.body);
        res.status(201).json(newResource);
    } catch (err) {
        next(err)
    }
})


module.exports = router;