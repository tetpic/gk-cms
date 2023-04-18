import { API_PATH, STORAGE } from "@/helpers/constants";


export async function getMyself() {
    // const request = await fetch('http://localhost:4000/users', {
    let token = STORAGE.getItem('Authenticate')

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