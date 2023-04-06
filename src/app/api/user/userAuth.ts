"use server"

import { User } from "@/redux/authUserSlice";


export async function isAuthUser(data: User) {
    let json = JSON.stringify(data)
    const request = await fetch('http://localhost:4000/users', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: json,
    })
    const response = await request.json();
    return response

}