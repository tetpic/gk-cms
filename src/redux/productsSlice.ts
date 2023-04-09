"use client"
import { getAllProducts, postNewProduct } from '@/app/api/products/products'
import { AddNewProduct, NewProduct } from '@/app/api/products/productsTypes'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'



export interface ProductsInitialState  {
    products : any,
    isAllProductsLoading: boolean,
    isAddProductLoading: boolean,
    error: string,
    fetched: boolean,
    newProduct: AddNewProduct

}

export const getProducts = createAsyncThunk('products/getProducts', 
    async function () {
        const data = await getAllProducts()
        return await data
    }
)

export const postProduct = createAsyncThunk('products/postNewProduct', 

    async function (object:NewProduct) {
        const data = await postNewProduct(object)
        return await data
    }
)

export  const productsSlice= createSlice({
name:"products",
initialState: <ProductsInitialState> {
    products: [],
    isAllProductsLoading: false,
    isAddProductLoading: false,
    error: '',
    fetched: false,
    newProduct: {
        productBody: '',
        productTime: ''
    }
},
reducers:{
    addProduct(state, action) {
        state.products = [...state.products, action.payload]
    },
    setProducts(state, action) {  
        state.products = [...state.products, action.payload]
        state.fetched = true
    }
},
extraReducers: (builder) => {

    builder.addCase(getProducts.pending, (state) => {
        state.isAllProductsLoading = true
        state.error = ''        
    })
    builder.addCase(getProducts.fulfilled, (state, action) => {        
        state.products = [...action.payload] 
        state.isAllProductsLoading = false
    })
    builder.addCase(postProduct.pending, (state)=> {
        state.isAddProductLoading = true
        state.error = ''
    })
    builder.addCase(postProduct.fulfilled, (state, action)=> {
        state.products = [...state.products, ...action.payload]
        state.isAddProductLoading = false
    })
},
})


export default productsSlice.reducer
export const { setProducts } = productsSlice.actions
export const productAction = productsSlice.actions
