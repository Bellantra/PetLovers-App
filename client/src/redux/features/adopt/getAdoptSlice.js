import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { extraGetAdoptablePets } from '../../asyncActions/getAllAdoptablePets'

const initialState = {
    adoptPets: [],
    status: 'loading',
    error: '',
}

const adoptSlice = createSlice({
    name: 'adopt', // name of the state
    initialState,
    reducers: {},
    extraReducers: { ...extraGetAdoptablePets },
})

export const actions = adoptSlice.actions
export default adoptSlice.reducer
