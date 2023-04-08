'use client';
import {Action,ThunkAction,configureStore,} from '@reduxjs/toolkit';

import productsReducer from './productsSlice';
import authReducer from './authUserSlice';
import loginReducer from './loginSlice';
import { createWrapper, } from 'next-redux-wrapper';

// config the store
const store = configureStore({
  reducer: {
    products: productsReducer,
    authorized: authReducer,
    login: loginReducer
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// export type IRootState = ReturnType<typeof store>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

const makeStore = () => store;

export const wrapper = createWrapper(makeStore);

// export default the store
export default store;
