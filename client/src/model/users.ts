

import data from "../data/users.json";
import { computed, reactive, ref } from "vue";
import { useSession } from "./session";

const users = ref([] as User[]);
const session = useSession();

export interface User {
    id: number;
    name: string;
    email: string;
    photo: string;
    token: string;
    role: string;
    username: string;
    TodayDistance: number;
    TodayDuration: string;
    TodayCalories: number;
    TodayPace: number;
    WeeksDistance: number;
    WeeksDuration: string;
    WeeksCalories: number;
    WeeksPace: number;
    AlltimeDistance: number;
    AlltimeDuration: string;
    AlltimeCalories: number;
    AlltimePace: number;
    
    
}

export function getUsers(): User[] {
    return data.User;
}

export function addCalories(calories: number) {
    if (session.user) {
        session.user.TodayCalories += calories;
        session.user.WeeksCalories += calories;
        session.user.AlltimeCalories += calories;

    }
}

