import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
export const API_ROUTE = 'http://localhost:4001'

export const createPetAdoption = createAsyncThunk(
    'pet/createPet',
    async (pet) => {
        try {
            return await axios.post(`${API_ROUTE}/pet/createPet`, pet)
        } catch (err) {
            console.log(err)
        }
    }
)

export const extraCreatePetAdoption = {
    [createPetAdoption.pending]: (state) => {
        state.status = 'loading'
    },
    [createPetAdoption.fulfilled]: (state, action) => {
        state.status = 'success'
    },
    [createPetAdoption.rejected]: (state) => {
        state.status = 'failed'
    },
}
