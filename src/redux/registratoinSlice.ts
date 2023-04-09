"use client"
import { registerNewUser } from '@/app/api/user/userRegister'
import { AuthUser, LoginUser, Roles, User } from '@/app/api/user/userTypes'
import { configureStore } from '@reduxjs/toolkit'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { RootState } from './store'


interface UserInitialState {
    user: AuthUser,
    isLoading: boolean,    
    isRegistered: boolean
}

export const registerUser = createAsyncThunk('users/registerUser', 
    // async function (arg, {getState}) {        
    //     let {login} = getState() as RootState
    //     let object: LoginUser = {name: login.name, email: login.email, password: login.password}
    //     const data = await sendUser(object)
    //     return  data
    // }
    async function (arg, {getState}) {
        let {register} = getState() as RootState
        let object: LoginUser = {name: register.user.name, email: register.user.email, password: register.user.password}
        const data = await registerNewUser(object)
        return await data
    }
)

let initialState :  UserInitialState = {
   user: {
    auth: false,
    role: Roles.guest,
    name: '',
    email: '',
    id: undefined,
    password: '',
   },
   isLoading: false,
   isRegistered: false
}

// create a slice 
export const registrationSlice= createSlice({
name:"authorized",
initialState: initialState,
reducers:{
    setName:(state, action)=>{
        state.user.name = action.payload
    },
    setEmail:(state, action)=>{
        state.user.email = action.payload 
    },
    setPassword: (state, action) => {
        state.user.password = action.payload
    }, 
},
extraReducers(builder) {
    builder.addCase(registerUser.pending, (state) => {
        state.isLoading = true                
    })
    builder.addCase(registerUser.fulfilled, (state, action) => {  
              
        state.user = {...action.payload} 
        state.isLoading = false
        state.isRegistered = true
    })   
},

})

//export the reducer
export default registrationSlice.reducer
// export the action
export const authActions = registrationSlice.actions