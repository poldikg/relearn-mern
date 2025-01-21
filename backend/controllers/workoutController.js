const Workout = require("../models/workoutModel");
const mongoose = require("mongoose")

//GET All workouts
const getWorkouts = async (req, res) => {

    try {
        const workouts = await Workout.find({}).sort({ createdAt: -1 })
        res.status(200).json(workouts)
    }
    catch (error) {
        res.status(400).json({ error: error.message })
    }
}

//GET One workout
const getWorkout = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(400).json({ error: "This workout doesn't exist" })
        return
    }

    try {
        const workout = await Workout.findById(id);
        res.status(200).json(workout)
    }
    catch (error) {
        res.status(400).json({ error: error.message })
    }

}


//POST A workout
const PostWorkout = async (req, res) => {
    const { title, reps, load } = req.body;

    try {
        const workout = await Workout.create({ title, reps, load });
        res.status(200).json(workout)
    }
    catch (error) {
        res.status(400).json({ error: error.message })
    }

}

//DELETE A workout
const deleteWorkout = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: "The workout doesn't exist" })
    }

    try {
        const workout = await Workout.findByIdAndDelete(id)
        res.status(200).json(workout)
    }
    catch (error) {
        res.status(400).json({ error: "Workout doesn't exist, can't delete." })
    }

}

//UPDATE A workout
const updateWorkout = async (req, res) => {
    const { id } = req.params;
    const { title, reps, load } = req.body;


    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: "The workout doesn't exist" })
    }

    try {
        const workout = await Workout.findByIdAndUpdate(id, { ...req.body })
        res.status(200).json(workout)
    }
    catch (error) {
        res.status(400).json({ error: "Workout doesn't exist, can't update it." })
    }
}
module.exports = { PostWorkout, getWorkout, getWorkouts, deleteWorkout, updateWorkout }