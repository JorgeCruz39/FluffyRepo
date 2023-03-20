import data from "../data/workouts.json";

export interface Workout {
    username: string;
    workoutType: string;
    workoutDate: string;
    workoutDistance: number;
    workoutDuration: string;
    workoutLongitudeandLatitude: string;
    workoutDescription: string;

}

export function getWorkout(): Workout[] {
    return data.workout;
}