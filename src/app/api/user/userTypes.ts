
export enum Roles { 'guest', 'admin', 'user' }

export interface User {
    name: string,
    email: string,
    password?: string|undefined,
    id?: number|undefined 
}

export interface AuthUser extends User {
    auth: boolean,
    role: Roles,     
}

export type LoginUser = {
    name: string,
    email: string,
    password: string|undefined
}

