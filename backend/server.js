const express = require("express");
const router = require("./routes/workouts");
require("dotenv").config();
const mongoose = require("mongoose");
const cors = require("cors")

const app = express();

//middleware
app.use(cors())
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next();
})

//routes
app.use("/api/workouts", router);

//Connect to DB
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        //server
        app.listen(process.env.PORT, () => {
            console.log(`Server is running on port ${process.env.PORT}`)
        })
    })
    .catch((error) => {
        console.log(error)
    })


