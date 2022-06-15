import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
export const API_ROUTE = 'http://localhost:4001'

export const putProduct = createAsyncThunk('products', async (data) => {
    try {
        const { _id, values } = data
        return await axios.put(`${API_ROUTE}/products/update/${_id}`, values)
    } catch (err) {
        console.log(err)
    }
})

export const extraPutProduct = {
    [putProduct.pending]: (state) => {
        state.statusEdit = 'loading'
    },
    [putProduct.fulfilled]: (state, action) => {
        state.statusEdit = 'success'
        state.products = action.payload.data
    },
    [putProduct.rejected]: (state) => {
        state.statusEdit = 'failed'
    },
}
