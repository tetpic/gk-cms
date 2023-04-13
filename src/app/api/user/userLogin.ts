import { API_PATH} from "@/helpers/constants";
import { LoginUser } from "./userTypes";



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