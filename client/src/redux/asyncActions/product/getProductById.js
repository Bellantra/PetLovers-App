import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
export const API_ROUTE = import.meta.env.VITE_APP_API_ROUTE

export const getProductById = createAsyncThunk(
    'pet/getProductById',
    async (id) => {
        try {
            return await axios.get(`${API_ROUTE}/products/${id}`)
        } catch (err) {
            console.log(err)
        }
    }
)

export const extraGetProductById = {
    [getProductById.pending]: (state) => {
        state.statusDetail = 'loading'
        state.openModal = true
    },
    [getProductById.fulfilled]: (state, action) => {
        state.statusDetail = 'success'
        state.productDetail = action.payload.data
    },
    [getProductById.rejected]: (state) => {
        state.statusDetail = 'failed'
    },
}
