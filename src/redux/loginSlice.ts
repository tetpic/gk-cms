"use client"
import { sendUser } from '@/app/api/user/userLogin'
import { LoginUser} from '@/app/api/user/userTypes'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { RootState } from './store'





export const sendUserData = createAsyncThunk('users/checkUser', 
    // async function (object:LoginUser) {
    //     debugger
    //     const data = await sendUser(object)
    //     return await data
    // }
    async function (arg, {getState}) {
        debugger
        let {login} = getState() as RootState
        let object: LoginUser = {name: login.name, email: login.email, password: login.password}
        const data = await sendUser(object)
        return await data
    }
)

interface LoginInitialState extends LoginUser  {
    isLoading: boolean,
    isCreated: boolean,  
    id: number | undefined    
}

let initialState :  LoginInitialState = {
    name: '',
    email: '',
    password: '',  
    isLoading: false,
    isCreated: false,
    id: undefined
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
    })
    builder.addCase(sendUserData.fulfilled, (state, action) => {     
        debugger   
        state.isLoading = false,
        state.isCreated = true,
        state.id = action.payload.id
    })
   
},

})

//export the reducer
export default loginSlice.reducer
// export the action
export const {setName,setEmail, setPassword} = loginSlice.actions
export const loginAction = loginSlice.actions