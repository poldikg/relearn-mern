import { useContext } from "react";
import { WorkoutsContext } from "../context/WorkoutContext";

export const useWorkoutsContext = () => {

    const context = useContext(WorkoutsContext)

    if (!context) {
        throw Error("Use the useWorkoutsContext hook inside the WorkContextProvider")
    }

    return context;

}