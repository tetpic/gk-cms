"use client"
import getAllProducts from '@/app/api/hello/products/products'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper'

// export const fetch
export interface ProductsInitialState  {
    products : any,
    isLoading: boolean,
    error: string

}

export const getProducts = createAsyncThunk('products/getProducts', 
    async function () {
        const data = await getAllProducts()
        return await data
    }
)

export  const productsSlice= createSlice({
name:"products",
initialState: <ProductsInitialState> {
    products: [],
    isLoading: false,
    error: ''
},
reducers:{
    addProduct(state, action) {
        
        state.products = [...state.products, action.payload]
    },
    setProducts(state, action) {
        debugger
        state.products = [...state.products, action.payload]
        // console.log(state.products)
    }
},
extraReducers: (builder) => {
   
      
    builder.addCase(getProducts.pending, (state) => {
        state.isLoading = true
        state.error = ''        
    })
    builder.addCase(getProducts.fulfilled, (state, action) => {        
        state.products = [...action.payload] 
        state.isLoading = false
     
    })
},
})


export default productsSlice.reducer
export const { setProducts } = productsSlice.actions
export const productAction = productsSlice.actions