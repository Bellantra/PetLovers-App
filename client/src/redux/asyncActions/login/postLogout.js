import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
export const API_ROUTE = 'http://localhost:4001'

export const postLogout = createAsyncThunk('login/postLogout', async () => {
    try {
        return await axios.post(`${API_ROUTE}/auth/logout`)
    } catch (err) {
        console.log(err)
    }
})

export const extraPostLogout = {
    [postLogout.pending]: (state) => {
        state.status = 'loading'
    },
    [postLogout.fulfilled]: (state, action) => {
        console.log('todo biennn')
        state.status = 'success'
        state.isLogged = false
        window.localStorage.removeItem('user')
    },
    [postLogout.rejected]: (state) => {
        state.status = 'failed'
        state.isLogged = true
    },
}
