/*  B"H
*/

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
}

export function useSession() {
    return session;
}

export function login(user: User) {
    session.user = {
        name: user.name,
        token: user.token,
    }
}

export function useLogout() {
    const router = useRouter();
    
    return function(){
        console.log({router});
        session.user = null;

        router.push("/login");
    }
}