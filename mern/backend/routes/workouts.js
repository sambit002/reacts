const express = require('express');

//the express router
const router = express.Router();

//get all workouts
router.get('/', (req, res) => {
    res.json({msg: "Get all workouts"});
});

//get a single workout
router.get('/:id', (req, res) => {
    res.json({msg: 'get a single workout'});
});

//post/create a new workout
router.post('/', (req, res) => {
    res.json({msg: 'post a new workout'})
});

//delete a workout
router.delete('/:id', (req, res) => {
    res.json({msg: 'delete a workout'})
});

//update a workout
router.patch('/:id', (req, res) => {
    res.json({msg: 'update a workout'})
});

module.exports = router;