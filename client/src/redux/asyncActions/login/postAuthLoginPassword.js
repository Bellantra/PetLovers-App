import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
export const API_ROUTE = 'http://localhost:4001'

export const postAuthLoginPassword = createAsyncThunk(
    'login/postAuthLoginPassword',
    async ({ email, password }) => {
        try {
            return await axios.post(`${API_ROUTE}/auth/login/password`, {
                email,
                password,
            })
        } catch (err) {
            console.log(err)
        }
    }
)

export const extraPostAuthLoginPassword = {
    [postAuthLoginPassword.pending]: (state) => {
        state.status = 'loading'
    },
    [postAuthLoginPassword.fulfilled]: (state, action) => {
        state.status = 'success'
        state.isLogged = true
        state.isAdmin = action.payload.data.isAdmin
        window.localStorage.setItem(
            'user',
            JSON.stringify(action.payload.data.token)
        )
    },
    [postAuthLoginPassword.rejected]: (state) => {
        state.status = 'failed'
        state.isLogged = false
    },
}
