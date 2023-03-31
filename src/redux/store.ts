"use client"
import { configureStore } from "@reduxjs/toolkit";
import authReducer  from "./authUserSlice";
import productsReducer, { ProductsInitialState } from "./productsSlice";


// config the store 
const store= configureStore({
    reducer: {
       products: productsReducer,
       authorized: authReducer 
    }
 })
 

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// export type IRootState = ReturnType<typeof store>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

// export default the store 
export default store
