import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
export const API_ROUTE = 'http://localhost:4001'

export const createProduct = createAsyncThunk(
    'products',
    async (product) => {
        try {
            return await axios.post(`${API_ROUTE}/products/create`, product);
        } catch (err) {
            console.log(err)
        }
    }
)

export const extraCreateProduct = {
    [createProduct.pending]: (state) => {
        state.status = 'loading'
    },
    [createProduct.fulfilled]: (state, action) => {
        state.status = 'success'
        state.products = action.payload.data
    },
    [createProduct.rejected]: (state) => {
        state.status = 'failed'
    },
}