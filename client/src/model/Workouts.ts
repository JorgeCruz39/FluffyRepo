import type { DataEnvelope, DataListEnvelope } from "./myFetch";
import { api,  useSession } from "./session";
import { reactive } from "vue";
import workouts from "../data/excercisessimple.json"
import { useWorkoutCollection } from '../model/workoutCollection';
import { ref } from "vue";


const session = useSession();

//reps didnt work
export interface Workout {
    workout: string;
    weight: number;
    reps: number;
}





export function useWorkouts() {
    return workouts;
}


export function useWorkout() {
   const state =reactive({
        workouts:workouts
   })
}


export function getWorkouts(): Promise<DataListEnvelope<Workout>> {

    return api('workout')

}

export function getWorkout(id: number): Promise<DataEnvelope<Workout>> {

    return api(`workout/${id}`)

}

export function createWorkout(collectionWorkouts: any): Promise<DataEnvelope<Workout>> {
        return api('workout', collectionWorkouts)
}

export function deleteWorkout(id: number): Promise<DataEnvelope<Workout>> {
        return api(`workout/${id}`, undefined, 'DELETE')
}