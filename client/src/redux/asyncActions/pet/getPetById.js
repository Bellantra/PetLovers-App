import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
export const API_ROUTE = 'http://localhost:4001'

export const getPetById = createAsyncThunk('pet/getPetById', async (id) => {
    try {
        return await axios.get(`${API_ROUTE}/pet/detail/${id}`)
    } catch (err) {
        console.log(err)
    }
})

export const extraGetPetById = {
    [getPetById.pending]: (state) => {
        state.statusDetail = 'loading'
    },
    [getPetById.fulfilled]: (state, action) => {
        state.statusDetail = 'success'
        state.petDetail = action.payload.data
    },
    [getPetById.rejected]: (state) => {
        state.statusDetail = 'failed'
    },
}
