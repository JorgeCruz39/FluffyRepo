import data from "../data/workouts.json";
import { reactive, ref } from "vue";
import { useSession } from "./session";



const workouts = ref([] as Workout[]);


const session = useSession();
const currentUser = reactive({userr: null as string | null});

workouts.value = data.workout;

export interface Workout {
    username?: string;
    workoutType: string;
    workoutDate: string;
    workoutDistance: number;
    workoutDuration: string;
    workoutLongitudeandLatitude: string;
    workoutDescription: string;

}

export function addToWorkout(workie:Workout, workoutDate : Date, username: string | undefined) {
    if (session.user) {
        currentUser.userr = session.user.username;
        username = currentUser.userr;
    }


    var userDate = new Date(workoutDate).getDate();
    var current = new Date().getDate();

    workouts.value.push({
        username: username,
        workoutDate: JSON.stringify(userDate),
        workoutDistance: workie.workoutDistance,
        workoutType: workie.workoutType,
        workoutDuration: workie.workoutDuration,
        workoutLongitudeandLatitude: workie.workoutLongitudeandLatitude,
        workoutDescription: workie.workoutDescription,
    });
}
export function useWorkout() {
    return workouts;
}


export function getWorkout(): Workout[] {
    return data.workout;
}