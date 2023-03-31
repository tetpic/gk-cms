import { configureStore } from '@reduxjs/toolkit'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// export const fetch

// create a slice 
export const authSlice= createSlice({
name:"authorized",
initialState:{
    auth: true
},
reducers:{
    setTrue:state=>{
        state.auth=true
    },
    setFalse:state=>{
        state.auth=false
    },
   }
})

//export the reducer
export default authSlice.reducer
// export the action
export const authActions = authSlice.actions