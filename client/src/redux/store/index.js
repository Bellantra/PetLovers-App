import { configureStore } from '@reduxjs/toolkit'
import adoptSlice from '../features/adopt/adoptSlice'
import shelterSlice from '../features/shelter/shelterSlice'
import productSlice from '../features/product/productSlice'
import loginSlice from '../features/login/loginSlice'
import userSlice from '../features/user/userSlice'

const store = configureStore({
    reducer: {
        adopt: adoptSlice,
        shelter: shelterSlice,
        product: productSlice,
        login: loginSlice,
        user: userSlice,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                // Ignore these field paths in all actions
                ignoredActionPaths: ['payload'],
            },
        }),
})

export default store

/*
The slice reducers were automatically passed to combineReducers()
The redux-thunk middleware was automatically added
Dev-mode middleware was added to catch accidental mutations
The Redux DevTools Extension was automatically set up
The middleware and DevTools enhancers were composed together and added to the store
*/
