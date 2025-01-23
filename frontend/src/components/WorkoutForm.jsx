import React, { useState } from "react";
import { useWorkoutsContext } from "../hooks/useWorkoutsContex";


const WorkoutForm = () => {
    const [title, setTitle] = useState("");
    const [load, setLoad] = useState("");
    const [reps, setReps] = useState("");
    const [error, setError] = useState("")
    const { dispatch } = useWorkoutsContext();
    console.log(title)

    const handleSubmit = async (event) => {
        event.preventDefault();

        const workout = { title, load, reps };

        const response = await fetch("http://localhost:4000/api/workouts/", {
            method: "POST",
            body: JSON.stringify(workout),
            headers: {
                "Content-Type": "application/json"
            }
        })

        const json = await response.json();

        if (response.ok) {
            setError(null)
            setTitle("")
            setLoad("")
            setReps("")
            dispatch({ type: "CREATE_WORKOUT", payload: json })
        }
        else if (!response.ok) {
            setError(json.error)
        }
    }

    return (
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add a new workout!</h3>

            <label htmlFor="title">Exercise Title:</label>
            <input type="text" name="title" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
            <label htmlFor="title">Load:</label>
            <input type="number" name="load" id="load" value={load} onChange={(e) => setLoad(e.target.value)} />
            <label htmlFor="title">Reps</label>
            <input type="number" name="reps" id="reps" value={reps} onChange={(e) => setReps(e.target.value)} />

            <button>Add Workout</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}

export default WorkoutForm