import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
export const API_ROUTE = 'http://localhost:4001'

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
        state.status = 'loading'
    },
    [postCreateProducts.fulfilled]: (state, action) => {
        state.status = 'success'
        state.products = action.payload.data
    },
    [postCreateProducts.rejected]: (state) => {
        state.status = 'failed'
    },
}
