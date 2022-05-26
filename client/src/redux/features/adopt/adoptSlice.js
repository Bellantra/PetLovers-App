import { createSlice } from '@reduxjs/toolkit'
import { extraGetAdoptablePets } from '../../asyncActions/getAllAdoptablePets'

const initialState = {
    adoptPets: [],
    status: 'loading',
    error: '',
    value: 0,
}

const adoptSlice = createSlice({
    name: 'adopt', // name of the state
    initialState,
    reducers: {
        increment: (state) => (state.value += 1),
    },
    extraReducers: { ...extraGetAdoptablePets },
})

export const { increment } = adoptSlice.actions
export default adoptSlice.reducer
