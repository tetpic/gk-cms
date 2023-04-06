"use client"
import { isAuthUser } from '@/app/api/user/userAuth'
import { configureStore } from '@reduxjs/toolkit'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// export const fetch

enum Roles { 'guest', 'admin', 'user' }

export interface User {
    name: string,
    email: string,
    password?: string,
    id?: number 
}

interface AuthUser extends User {
    auth: boolean,
    role: Roles,     
}

interface UserInitialState {
    user: AuthUser,
    isLoading: boolean,    
}





export const checkUser = createAsyncThunk('users/checkUser', 
    async function (object:User) {
        const data = await isAuthUser(object)
        return await data
    }
)

let initialState :  UserInitialState = {
   user: {
    auth: false,
    role: Roles.guest,
    name: '',
    email: ''
   },
   isLoading: false,
}

// create a slice 
export const authSlice= createSlice({
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
    builder.addCase(checkUser.pending, (state) => {
        state.isLoading = true                
    })
    builder.addCase(checkUser.fulfilled, (state, action) => {        
        state.user = {...action.payload} 
        state.isLoading = false
    })
    // builder.addCase(postProduct.pending, (state)=> {
    //     state.isAddProductLoading = true
    //     state.error = ''
    // })
    // builder.addCase(postProduct.fulfilled, (state, action)=> {
    //     state.products = [...state.products, ...action.payload]
    //     state.isAddProductLoading = false
    // })    
},

})

//export the reducer
export default authSlice.reducer
// export the action
export const authActions = authSlice.actions