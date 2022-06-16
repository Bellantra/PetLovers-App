import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
export const API_ROUTE = import.meta.env.VITE_APP_API_ROUTE

export const postCreateProducts = createAsyncThunk(
    'products/create',
    async (data) => {
        try {
            return await axios.post(`${API_ROUTE}/products/create`, data)
        } catch (err) {
            console.log(err)
        }
    }
)

export const extraPostCreateProducts = {
    [postCreateProducts.pending]: (state) => {
        state.statusCreate = 'loading'
    },
    [postCreateProducts.fulfilled]: (state, action) => {
        state.statusCreate = 'success'
    },
    [postCreateProducts.rejected]: (state) => {
        state.statusCreate = 'failed'
    },
}
