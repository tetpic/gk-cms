import { LoginUser } from "./userTypes";



export async function sendUser(userData: LoginUser) {
    let json = JSON.stringify(userData)
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