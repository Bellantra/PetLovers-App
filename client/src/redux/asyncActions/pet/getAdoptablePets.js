import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
export const API_ROUTE = import.meta.env.VITE_APP_API_ROUTE

export const getAdoptablePets = createAsyncThunk(
    'pet/getAdoptablePets',
    async (filter = {}) => {
        try {
            Object.keys(filter).forEach((key) => {
                if (filter[key] === '') {
                    delete filter[key]
                }
            })
            return await axios.get(`${API_ROUTE}/pet/adoptable`, {
                params: filter,
            })
        } catch (err) {
            console.log(err)
        }
    }
)

export const extraGetAdoptablePets = {
    [getAdoptablePets.pending]: (state) => {
        state.status = 'loading'
    },
    [getAdoptablePets.fulfilled]: (state, action) => {
        state.status = 'success'
        state.adoptPets = action.payload.data
    },
    [getAdoptablePets.rejected]: (state) => {
        state.status = 'failed'
    },
}
