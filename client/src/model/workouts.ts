import { reactive, ref } from "vue";
import { getWorkout, type Workout } from "@/model/workout";

const userWorkout = ref([] as Workout[]);
export const workout = reactive(getWorkout());


export interface userWorkout {
    username: string;
    workoutType: string;
    workoutDate: string;
    workoutDistance: number;
    workoutDuration: string;
    workoutLongitudeandLatitude: string;
    workoutDescription: string;
}

export function adduserworkout(workout: Workout) {
    userWorkout.value.push({
        username: workout.username,
        workoutType: workout.workoutType,
        workoutDate: workout.workoutDate,
        workoutDistance: workout.workoutDistance,
        workoutDuration: workout.workoutDuration,
        workoutLongitudeandLatitude: workout.workoutLongitudeandLatitude,
        workoutDescription: workout.workoutDescription,
    });
}