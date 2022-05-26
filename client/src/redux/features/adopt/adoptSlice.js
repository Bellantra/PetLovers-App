import { createSlice } from '@reduxjs/toolkit'
import { extraGetAdoptablePets } from '../../asyncActions/adopt/getAllAdoptablePets'

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

export default adoptSlice.reducer
