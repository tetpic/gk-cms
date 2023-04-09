import { LoginUser } from "./userTypes";



export async function sendUser(userData: LoginUser) {
    let json = JSON.stringify(userData)
    // const request = await fetch('http://localhost:4000/users', {

    //Серёгино апи
    const request = await fetch('http://0.0.0.0:80/api/login', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: json,
    })
    const response = await request.text();
    debugger
    return response
}