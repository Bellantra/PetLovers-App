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
        state.statusCreate = 'loading'
    },
    [createPetAdoption.fulfilled]: (state, action) => {
        state.statusCreate = 'success'
    },
    [createPetAdoption.rejected]: (state) => {
        state.statusCreate = 'failed'
    },
}
