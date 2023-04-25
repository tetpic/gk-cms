import { API_PATH, STORAGE } from "@/helpers/constants";
import { UserFindBy } from "@/types/users";

export async function getUsers (object : {findBy: UserFindBy, findString: string}) {
    let token = STORAGE.getItem('Authenticate')
    let queryParams = object.findBy == 'unset'?'':'?' + object.findBy + '=' + object.findString
    let request = await fetch(API_PATH + '/api/root/get-users'+queryParams, {
        method:"GET",
        headers: {
            'Authorization': 'Bearer ' + token,
            'Accept' : 'application/json',
            credentials: 'include',
        }
    })

    let response = await request.json()
    return response
}