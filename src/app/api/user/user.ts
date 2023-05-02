import { API_PATH, STORAGE } from "@/helpers/constants";
import { LoginUser, Roles, User } from "./userTypes";
import { UserFindBy } from "@/types/users";

export const token: string|null = STORAGE.getItem('Authenticate')
export const authHeader = {
    'Authorization': `Bearer ${token}`
}


export async function getMyself() {
    // const request = await fetch('http://localhost:4000/users', {

    //Серёгино апи
    const request = await fetch( API_PATH + '/api/users', {
        headers: {
            'Authorization' : `Bearer ${token}`,
            'Accept' : 'application/json',
            credentials: 'include'
        }
    })
    const response = await request.json();
    
    return response
}


export async function logOutUser() {
    const request = await fetch(API_PATH + '/api/logout', {
        method: 'POST',
        headers: authHeader
    })
    const response = await request.json()
    return response
}


export async function sendUser(userData: LoginUser) {
    let json = JSON.stringify(userData)  
   

    //Серёгино апи
    const request = await fetch(API_PATH+'/api/login', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: json,
    })
    const response = await request.text();
    
    return response
}


export async function registerNewUser(data: User) {
    let json = JSON.stringify(data)   

    //Серегино апи
    
    const request = await fetch( API_PATH + '/api/reg', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: json,
    })
    const response = await request.json();
    return response
}


export async function getUsers (object : {findBy: UserFindBy, findString: string}) {
    let queryParams = object.findBy == 'unset'?'':'?' + object.findBy + '=' + object.findString
    let request = await fetch(API_PATH + '/api/root/get-users'+queryParams, {
        method:"GET",
        headers: {
            ...authHeader,            
            'Accept' : 'application/json',
            credentials: 'include',
        }
    })

    let response = await request.json()
    return response
}


export async function changeUserRole(obj: {id: number, role: Roles}) {
    console.log(obj)
    let data = JSON.stringify(obj)
    let request = await fetch (API_PATH + '/api/root/change-users-role', {
        method: 'POST',
        headers: {
            'Authorization': 'Bearer ' + token,
        },
        body: data
    })
    let response = await request.json()
    return response
}
