"use client"
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// export const fetch
export interface ProductsInitialState  {
    products : any,
    isLoading: boolean,
    error: string

}

export const getProducts = createAsyncThunk('products/getProducts', 
    async function () {
        const response = await fetch('http://localhost:4000/products')
        const data = await response.json();
        return data
    }
)

// create a slice 
export const productsSlice= createSlice({
name:"products",
initialState: <ProductsInitialState> {
    products: [],
    isLoading: true,
    error: ''
},
reducers:{
    addProduct(state, action) {
        state.products = [...state.products, action.payload]
    },   
},
extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state) => {
        state.isLoading = true
        state.error = ''        
      // both `state` and `action` are now correctly typed
      // based on the slice state and the `pending` action creator
    })
    builder.addCase(getProducts.fulfilled, (state, action) => {        
        state.products = [action.payload] 
        state.isLoading = false
     
    })
},
  
})


export default productsSlice.reducer
// export the action
export const productAction = productsSlice.actions