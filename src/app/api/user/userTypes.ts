
export enum Roles {guest= 'guest',admin = 'admin', user=  'user',root = 'root' }

export interface User {
    name: string,
    email: string,
    id?: number|undefined 
}


export interface AuthUser extends User {
    auth: boolean,
    role: Roles,     
}

export interface LoginUser extends User {
    password: string|undefined,
}


