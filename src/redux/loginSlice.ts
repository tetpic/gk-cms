"use client"
import { sendUser } from '@/app/api/user/userLogin'
import { LoginUser} from '@/app/api/user/userTypes'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { RootState } from './store'





export const sendUserData = createAsyncThunk('users/checkUser', 
    async function (arg, {getState}) {        
        let {login} = getState() as RootState
        let object: LoginUser = {name: login.name, email: login.email, password: login.password}
        const data = await sendUser(object)
        return  data
    }
)

interface LoginInitialState extends LoginUser  {
    isLoading: boolean,
    loggedIn: boolean,  
    // id: number | any   
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
    })
  
   
},

})

//export the reducer
export default loginSlice.reducer
// export the action
export const {setName,setEmail, setPassword} = loginSlice.actions
export const loginAction = loginSlice.actions