const express = require("express");
const router = express.Router();
const Workout = require("../models/workoutModel.js")
const { PostWorkout, getWorkout, getWorkouts, deleteWorkout, updateWorkout } = require("../controllers/workoutController.js")

//GET All workouts
router.get("/", getWorkouts);

//GET a single workout
router.get("/:id", getWorkout)

//POST Workout
router.post("/", PostWorkout)

//DELETE A workout
router.delete("/:id", deleteWorkout)

//Update a workout
router.patch("/:id", updateWorkout)






module.exports = router;