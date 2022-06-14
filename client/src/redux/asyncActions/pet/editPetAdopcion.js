import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
export const API_ROUTE = 'http://localhost:4001'

export const editPetAdoption = createAsyncThunk(
    'pet/update/:id',
    async (data) => {
        try {
            const { _id, values } = data
            return await axios.put(`${API_ROUTE}/pet/update/${_id}`, values)
        } catch (err) {
            console.log(err)
        }
    }
)

export const extraEditPetAdoption = {
    [editPetAdoption.pending]: (state) => {
        state.statusCreate = 'loading'
    },
    [editPetAdoption.fulfilled]: (state, action) => {
        state.statusCreate = 'success'
    },
    [editPetAdoption.rejected]: (state) => {
        state.statusCreate = 'failed'
    },
}
