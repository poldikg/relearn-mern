import { createContext, useReducer, useEffect } from "react";

export const WorkoutsContext = createContext();

const workoutsReducer = (state, action) => {


    if (action.type === "SET_WORKOUTS") {
        return {
            workouts: action.payload
        }
    }
    else if (action.type === "CREATE_WORKOUT") {
        return {
            workouts:
                [action.payload, ...state.workouts]
        }
    }
    else if (action.type === "DELETE_WORKOUT") {
        return {
            workouts: state.workouts.filter(workout => workout._id != action.payload._id)
        }
    }
    else {
        return state
    }
}

const WorkoutContextProvider = (props) => {



    const [state, dispatch] = useReducer(workoutsReducer, { workouts: [] })
    console.log(state)



    return (
        <WorkoutsContext.Provider value={{ ...state, dispatch }}>
            {props.children}
        </WorkoutsContext.Provider>
    )
}

export default WorkoutContextProvider
