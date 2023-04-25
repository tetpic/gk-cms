
export enum UserFindBy {
    id = 'id',
    role = 'role',
    email = 'email', 
    name = 'name',
    unset = 'unset'
}

export interface AdminUsersInitialState {
    users: Object[],
    findBy: UserFindBy,
    findString: string,
    isLoading: boolean,
    message: string,
    error: string,
}