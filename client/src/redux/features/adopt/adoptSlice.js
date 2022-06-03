import { createSlice } from '@reduxjs/toolkit'
import {
    getAdoptablePets,
    extraGetAdoptablePets,
} from '../../asyncActions/pet/getAdoptablePets'
import { getPetById, extraGetPetById } from '../../asyncActions/pet/getPetById'

const initialState = {
    adoptPets: [],
    petDetail: {},
    status: 'loading',
    statusDetail: 'loading',
    error: '',
}

const adoptSlice = createSlice({
    name: 'adopt', // name of the state
    initialState,
    reducers: {
        cleanPetDetail: (state) => {
            state.petDetail = {}
            state.statusDetail = 'loading'
        },
    },
    extraReducers: { ...extraGetAdoptablePets, ...extraGetPetById },
})

export { getAdoptablePets, getPetById }
export const { cleanPetDetail } = adoptSlice.actions
export default adoptSlice.reducer
