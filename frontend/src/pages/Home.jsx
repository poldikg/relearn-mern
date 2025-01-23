import React from "react"
import { useEffect } from "react"

//components
import WorkoutDetails from "../components/WorkoutDetails"
import WorkoutForm from "../components/WorkoutForm"

//hooks
import { useWorkoutsContext } from "../hooks/useWorkoutsContex"

const Home = () => {


    const { workouts, dispatch } = useWorkoutsContext()
    console.log(workouts)
    useEffect(() => {

        const fetchData = async () => {

            const response = await fetch("http://localhost:4000/api/workouts/");
            const json = await response.json();
            if (response.ok) {
                dispatch({ type: "SET_WORKOUTS", payload: json })
            }

        }

        fetchData()


    }, [])



    return (
        <div className="home">
            <div className="workouts">
                {workouts && workouts.map(workout => {
                    return <WorkoutDetails
                        key={workout._id}
                        workout={workout}
                    />
                })}
            </div>
            <WorkoutForm />
        </div>
    )
}

export default Home