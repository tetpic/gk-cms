"use client"
import { LoginUser} from '@/app/api/user/userTypes'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getMyself } from '@/app/api/user/user'


export const getUser = createAsyncThunk('users/checkUser', 
    async function () {        
        const data = await getMyself()
        return  data
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
    setPassword: (state, action) => {
        state.password = action.payload
    },  
},
extraReducers(builder) {
    builder.addCase(getUser.pending, (state) => {
        state.isLoading = true                
    }),
    builder.addCase(getUser.rejected, (state, action: any) => {     
        state.error = action.payload      
    }),
    builder.addCase(getUser.fulfilled, (state, action) => {  
        state.isLoading = false
        state.loggedIn = true  
    })
  
   
},

})

//export the reducer
export default userSlice.reducer
// export the action
export const {setName,setEmail, setPassword} = userSlice.actions
export const loginAction = userSlice.actions