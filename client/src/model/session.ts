

import { reactive } from "vue";
import { useRouter } from "vue-router";

const session = reactive({
    user: null as User | null,
})

interface User {
    id?: number;
    name: string;
    email?: string;
    photo?: string;
    token?: string;
    role?: string;
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

export function useSession() {
    return session;
}

export function login(user: User) {
    session.user = {
        name: user.name,
        token: user.token,
        TodayDistance: user.TodayDistance,
        TodayDuration: user.TodayDuration,
        TodayCalories: user.TodayCalories,
        TodayPace: user.TodayPace,
        WeeksDistance: user.WeeksDistance,
        WeeksDuration: user.WeeksDuration,
        WeeksCalories: user.WeeksCalories,
        WeeksPace: user.WeeksPace,
        AlltimeDistance: user.AlltimeDistance,
        AlltimeDuration: user.AlltimeDuration,
        AlltimeCalories: user.AlltimeCalories,
        AlltimePace: user.AlltimePace

    }
}

export function useLogout() {
    const router = useRouter();
    
    return function(){
        session.user = null;
        router.push('');
    }
}