import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
export const API_ROUTE = 'http://localhost:4001'

export const postUser = createAsyncThunk('users/createUser', async (user) => {
    try {
        return await axios.post(`${API_ROUTE}/users/createUser`, user)
    } catch (err) {
        console.log(err)
    }
})

export const extraPostUser = {
    [postUser.pending]: (state, action) => {
        state.status = 'loading'
    },
    [postUser.fulfilled]: (state, action) => {
        state.status = 'success'
        console.log(action.payload.data, 'cree user!!')
        // state.userInfo = action.payload.data
    },
    [postUser.rejected]: (state, action) => {
        state.status = 'failed'
    },
}
