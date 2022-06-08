import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
export const API_ROUTE = 'http://localhost:4001'

export const getUserInfo = createAsyncThunk('auth/getUserInfo', async () => {
    const token = JSON.parse(window.localStorage.getItem('user'))

    const config = { headers: { Authorization: `Bearer ${token}` } }
    try {
        return await axios.get(`${API_ROUTE}/auth/userInfo`, config)
    } catch (err) {
        console.log(err)
    }
})

export const extraGetUserInfo = {
    [getUserInfo.pending]: (state, action) => {
        state.status = 'loading'
    },
    [getUserInfo.fulfilled]: (state, action) => {
        state.status = 'success'
        state.userInfo = action.payload.data
    },
    [getUserInfo.rejected]: (state, action) => {
        state.status = 'failed'
    },
}
