"use client"
import { registerNewUser } from '@/app/api/user/userRegister'
import { AuthUser, Roles, User } from '@/app/api/user/userTypes'
import { configureStore } from '@reduxjs/toolkit'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'


interface UserInitialState {
    user: AuthUser,
    isLoading: boolean,    
    isRegistered: boolean
}

export const registerUser = createAsyncThunk('users/registerUser', 
    async function (object:User) {
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
    id: undefined
   },
   isLoading: false,
   isRegistered: false
}

// create a slice 
export const registrationSlice= createSlice({
name:"authorized",
initialState: initialState,
reducers:{
    setTrue:state=>{
        state.user.auth = true
    },
    setFalse:state=>{
        state.user.auth=false
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