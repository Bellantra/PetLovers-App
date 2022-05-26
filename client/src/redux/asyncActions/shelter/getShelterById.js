import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
export const API_ROUTE = 'http://localhost:4001'

export const getAllShelters = createAsyncThunk(
    'shelter/getAllShelters',
    async () => {
        try {
            return await axios.get(`${API_ROUTE}/shelters`)
        } catch (err) {
            console.log(err)
        }
    }
)

export const extraGetAllShelters = {
    [getAllShelters.pending]: (state, action) => {
        state.status = 'loading'
    },
    [getAllShelters.fulfilled]: (state, action) => {
        state.status = 'success'
        state.adoptPets = action.payload.data
    },
    [getAllShelters.rejected]: (state, action) => {
        state.status = 'failed'
    },
}
