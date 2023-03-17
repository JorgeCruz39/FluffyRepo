

import data from "../data/users.json";





export interface User {
    id: number;
    name: string;
    email: string;
    photo: string;
    token: string;
}

export function getUsers(): User[] {
    return data.User;
}