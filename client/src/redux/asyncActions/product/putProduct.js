import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
export const API_ROUTE = 'http://localhost:4001'

export const putProduct = createAsyncThunk(
    'products',
    async (id, infoProduct) => {
        try {
            return await axios.put(`${API_ROUTE}/products/update/${id}`, infoProduct);
        } catch (err) {
            console.log(err)
        }
    }
)

export const extraPutProduct = {
    [putProduct.pending]: (state) => {
        state.status = 'loading'
    },
    [putProduct.fulfilled]: (state, action) => {
        state.status = 'success'
        state.products = action.payload.data
    },
    [putProduct.rejected]: (state) => {
        state.status = 'failed'
    },
}