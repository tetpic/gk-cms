"use client"
import { getAllProducts, postNewProduct, removeProduct } from '@/app/api/products/products'
import {ProductsInitialState } from '@/types/product'
import { createSlice, createAsyncThunk, current } from '@reduxjs/toolkit'
import { RootState } from './store'





export const getProducts = createAsyncThunk('products/getProducts', 
    async function () {
        const data = await getAllProducts()
        return await data
    }
)

export const postProduct = createAsyncThunk('products/postNewProduct', 
    async function (arg, {getState}) {
        let {products} = getState() as RootState
        const data = await postNewProduct(products.newProduct)
        return await data
    }
)

export const deleteProduct = createAsyncThunk('products/deleteProduct',
    async function (arg: {id: number, index: number}) {
        const response = await removeProduct(arg.id, arg.index)
        return {response: response, index: arg.index}
    }
)

let initialState: ProductsInitialState = {
    products: [],
    isAllProductsLoading: false,
    isAddProductLoading: false,
    error: '',
    fetched: false,
    deleted: false,
    newProduct: {
        title: '', 
        body:'', 
        description:'',
        tags: [], 
        active: false,
        price: 0,
        discount: 0,
    }    
}

export  const productsSlice= createSlice({
name:"products",
initialState: initialState,
reducers:{
    addProduct(state, action) {
        state.products = [...state.products, action.payload]
    },
    setNewProduct(state, action) {  
        state.newProduct = {...state.newProduct, ...action.payload}     
    },
    deleteStatus(state) {
        state.deleted = false
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
        state.fetched = true     
    })
    builder.addCase(postProduct.pending, (state)=> {
        state.isAddProductLoading = true
        state.error = ''
    })
    builder.addCase(postProduct.fulfilled, (state, action)=> {        
        state.products = [...state.products, action.payload]
        state.isAddProductLoading = false  
        state.deleted = true     
    })   
    builder.addCase(deleteProduct.fulfilled, (state, action)=> { 
        //не стоит использовать мутирующие методы массива, то есть вместо splice стоит использовать slice
        let currentState = [...current(state.products)]
        let sliced = [...currentState.slice(0, action.payload.index), ...currentState.slice(action.payload.index+1)]
        state.products = [...sliced]
      
                
    })
    
},
})


export default productsSlice.reducer
export const { setNewProduct, deleteStatus} = productsSlice.actions
export const productAction = productsSlice.actions
