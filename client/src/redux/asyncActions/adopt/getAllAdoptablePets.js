import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
export const API_ROUTE = 'http://localhost:4001'

export const getAllAdoptablePets = createAsyncThunk(
    'adopt/getAllAdoptablePets',
    async () => {
        try {
            return await axios.get(`${API_ROUTE}/adopt`)
        } catch (err) {
            console.log(err)
        }
    }
)

export const extraGetAdoptablePets = {
    [getAllAdoptablePets.pending]: (state, action) => {
        state.status = 'loading'
    },
    [getAllAdoptablePets.fulfilled]: (state, action) => {
        state.status = 'success'
        state.adoptPets = action.payload.data
    },
    [getAllAdoptablePets.rejected]: (state, action) => {
        state.status = 'failed'
    },
}
