import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
export const API_ROUTE = import.meta.env.VITE_APP_API_ROUTE

export const getShelterById = createAsyncThunk(
    'shelter/getShelterById',
    async (id) => {
        try {
            return await axios.get(`${API_ROUTE}/shelters/${id}`)
        } catch (err) {
            console.log(err)
        }
    }
)

export const extraGetShelterById = {
    [getShelterById.pending]: (state, action) => {
        state.statusDetail = 'loading'
    },
    [getShelterById.fulfilled]: (state, action) => {
        state.statusDetail = 'success'
        state.shelterDetail = action.payload.data
    },
    [getShelterById.rejected]: (state, action) => {
        state.statusDetail = 'failed'
    },
}
