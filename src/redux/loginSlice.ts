"use client"
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { RootState } from './store'
import { STORAGE } from '@/helpers/constants'
import { sendUser } from '@/app/api/user/user'
import { LoginUser } from '@/types/userTypes'

type UserDataResponse = {
    name: string,
    email: string,
    role: string,
    api_token: string, 
    id: number
}


export const sendUserData = createAsyncThunk('users/checkUser', 
    async function (arg, {getState}) {        
        let {login} = getState() as RootState
        let object: LoginUser = {name: login.name, email: login.email, password: login.password}
        let data = await sendUser(object)   
        let responce = JSON.parse(data) as UserDataResponse        
        return  responce 
    }
)



interface LoginInitialState extends LoginUser  {
    isLoading: boolean,
    loggedIn: boolean,     
    error: string|undefined,
    message: string
}

let initialState :  LoginInitialState = {
    name: '',
    email: '',
    password: '',  
    isLoading: false,
    loggedIn: false,   
    error: undefined,
    message: ''
}

// create a slice 
export const loginSlice= createSlice({
name:"authorized",
initialState: initialState,
reducers:{
    setName:(state, action)=>{
        state.name = action.payload
    },
    setEmail:(state, action)=>{
        state.email = action.payload 
    },
    setPassword: (state, action) => {
        state.password = action.payload
    },  
},
extraReducers(builder) {
    builder.addCase(sendUserData.pending, (state) => {
        state.isLoading = true                
    }),
    builder.addCase(sendUserData.rejected, (state, action: any) => {     
        state.error = action.payload      
    }),
    builder.addCase(sendUserData.fulfilled, (state, action) => {            
        state.isLoading = false
        state.loggedIn = true  
        if(action.payload.id) {
            STORAGE.setItem('Authenticate', action.payload.api_token)
            STORAGE.setItem('userName', action.payload.name)
            STORAGE.setItem('id', `${action.payload.id}`)
            STORAGE.setItem('email', `${action.payload.name}`)
            STORAGE.setItem('role', `${action.payload.role}`)
        }
    })   
},

})

//export the reducer
export default loginSlice.reducer
// export the action
export const {setName,setEmail, setPassword} = loginSlice.actions
export const loginAction = loginSlice.actions