const express = require("express");

const router = express.Router();

//GET All workouts
router.get("/", (req, res) => {
    res.json({ msg: "GET all workouts" })
});

//GET a single workout
router.get("/:id", (req, res) => {
    res.json({ msg: "Get a single workout" })
})

//POST Workout
router.post("/", (req, res) => {
    res.json({ msg: "POST a workout" })
})

//DELETE A workout
router.delete("/:id", (req, res) => {
    res.json({ msg: "DELETE a workout" })
})

//Update a workout
router.patch("/:id", (req, res) => {
    res.json({ msg: "Update a workout" })
})






module.exports = router;