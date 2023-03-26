import { configureStore } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

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
// config the store 
const store= configureStore({
   reducer: {
      authorized: authSlice.reducer
   }
})

// export default the store 
export default store

// export the action
export const iconAction = authSlice.actions