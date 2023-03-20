

import data from "../data/users.json";

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