"use server"

import { User } from "./userTypes";


export async function registerNewUser(data: User) {
    let json = JSON.stringify(data)
    
    // const request = await fetch('http://localhost:4000/users', {

    //Серегино апи
    const request = await fetch('http://0.0.0.0:80/api/reg', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: json,
    })
    const response = await request.json();
    return response
}