"use client"
import { AuthUser, Roles} from '@/app/api/user/userTypes'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getMyself } from '@/app/api/user/user'
import { STORAGE } from '@/helpers/constants'


/*
название user/getUser должно быть уникальным, 
иначе есть вероятность вызвать другую санку, 
что приведет к неопределенным 
последствиям, которые в дальнейшем сложно дебажить
*/
export const getUser = createAsyncThunk('users/getUser', 
    async function () {        
        const data = await getMyself()
        return  data
    }
)

interface UserInitialState extends AuthUser  {
    isLoading: boolean,
    error: string|undefined,
    message: string,
   
}

let initialState :  UserInitialState = {
    name: '',
    email: '',  
    message: '',
    isLoading: false,
    error: undefined,     
    id: undefined,
    auth: false,
    role: Roles.guest
}

// create a slice 
export const userSlice= createSlice({
name:"authorized",
initialState: initialState,
reducers:{
    setName:(state, action)=>{
        state.name = action.payload
    },
    setEmail:(state, action)=>{
        state.email = action.payload 
    },  
    checkMyself: (state) => {
        let role = STORAGE.getItem('role') as unknown
        state.id = Number(STORAGE.getItem('id'))??undefined
        state.email = STORAGE.getItem('email')??''
        state.name = STORAGE.getItem('userName')??''
        state.role = role as Roles??Roles.guest
        
    }
},
extraReducers(builder) {
    builder.addCase(getUser.pending, (state) => {
        state.isLoading = true                
    }),
    builder.addCase(getUser.rejected, (state, action: any) => {     
        state.error = action.payload      
    }),
    builder.addCase(getUser.fulfilled, (state, action) => {  
        console.log(action.payload)
        state.isLoading = false         
    })   
},

})

//export the reducer
export default userSlice.reducer
// export the action
export const {setName,setEmail, checkMyself} = userSlice.actions
export const loginAction = userSlice.actions