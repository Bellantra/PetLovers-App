import { createSlice } from '@reduxjs/toolkit'
import {
    extraPostAuthLoginPassword,
    postAuthLoginPassword,
} from '../../asyncActions/login/postAuthLoginPassword'

const initialState = {
    isLogged: false,
    isAdmin: false,
    status: 'loading',
    error: '',
}

const loginSlice = createSlice({
    name: 'login', // name of the state
    initialState,
    reducers: {},
    extraReducers: {
        ...extraPostAuthLoginPassword,
    },
})

export { postAuthLoginPassword }

export default loginSlice.reducer
