import { createSlice } from '@reduxjs/toolkit'
import {
    extraPostAuthLoginPassword,
    postAuthLoginPassword,
} from '../../asyncActions/login/postAuthLoginPassword'
import {
    postLogout,
    extraPostLogout,
} from '../../asyncActions/login/postLogout'

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
        ...extraPostLogout,
    },
})

export { postAuthLoginPassword, postLogout }

export default loginSlice.reducer
