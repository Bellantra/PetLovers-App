import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
export const API_ROUTE = import.meta.env.VITE_APP_API_ROUTE

export const getAllProducts = createAsyncThunk('products', async () => {
    try {
        return await axios.get(`${API_ROUTE}/products/`)
    } catch (err) {
        console.log(err)
    }
})

export const extraGetAllProducts = {
    [getAllProducts.pending]: (state) => {
        state.status = 'loading'
    },
    [getAllProducts.fulfilled]: (state, action) => {
        state.status = 'success'
        state.products = action.payload.data
    },
    [getAllProducts.rejected]: (state) => {
        state.status = 'failed'
    },
}
